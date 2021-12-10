import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrendentialsDto } from './dto/credentials.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private database: PrismaService, private jwt: JwtService) { };

  async login(dataLogin: CrendentialsDto) {
    const usuario = await this.database.usuarios.findUnique({
      where: { email: dataLogin.email }
    });
    if (!usuario) {
      throw new NotFoundException('Usuário não foi encontrado');
    };
    const senhaValida = await bcrypt.compare(
      dataLogin.senha,
      usuario.senha
    );
    if (senhaValida) {
      const payload = { email: usuario.email };
      const token = await this.jwt.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException('Credenciais inválidas');
    };
  };
}