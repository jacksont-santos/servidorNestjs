import { Injectable, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { usuarios } from '@prisma/client';
import { CreateUserDTO } from './dto/createuser.dto';
import { UpdateUserDTO } from './dto/updateuser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private badeco: PrismaService) { }

    async getAllUsers(): Promise<any[]> {
        const usersAll = await this.badeco.usuarios.findMany();
        const noPass = usersAll.map(({ senha, ...resto }) => resto)
        return noPass;
    };

    async getUser(id: string): Promise<usuarios> {
        const user = await this.badeco.usuarios.findUnique({ where: { id }, });
        if (!user) { throw new NotFoundException(' Usuário informado não foi encontrado'); };

        delete user.senha;
        return user;
    };

    async createUser(datadto: CreateUserDTO): Promise<usuarios> {
        const userExist = await this.badeco.usuarios.findUnique({
            where: { email: datadto.email },
        });
        if (userExist) {
            throw new ConflictException(' Esse email já está cadastrado');
        };
        if (datadto.senha !== datadto.confirmacao) {
            throw new UnauthorizedException('Senha e confirmação de senha devem ser iguais');
        };
        const saltos = 7;
        const hashdaSenha = await bcrypt.hash(datadto.senha, saltos);

        delete datadto.confirmacao;
        const criarUsuario = await this.badeco.usuarios.create({
            data: {
                ...datadto,
                senha: hashdaSenha,
            }
        });
        delete criarUsuario.senha;
        return criarUsuario;
    };

    async updateUser(id: string, dataUser: UpdateUserDTO): Promise<usuarios> {
        const updateUsuario = await this.badeco.usuarios.update({
            data: dataUser,
            where: { id: id },
        });
        delete updateUsuario.senha;
        return updateUsuario;
    };

    async deleteUser(id: string): Promise<{ message: string }> {
        const user = await this.badeco.usuarios.findUnique({ where: { id }, });
        if (!user) { throw new NotFoundException(' Usuário informado não foi encontrado'); } else {
            await this.badeco.usuarios.delete({ where: { id }, });
            return { message: ' Usuário deletado' };
        };
    };
}