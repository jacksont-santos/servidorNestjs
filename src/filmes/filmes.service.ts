import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFilmDTO } from './dto/createfilme.dto';
import { UpdateFilmDTO } from './dto/updatefilme.dto';
import { filmes } from '@prisma/client';

@Injectable()
export class FilmesService {
    constructor(private database: PrismaService) { };

    async getAllfilms(): Promise<any[]> {
        const allMovies = await this.database.filmes.findMany();
        return allMovies;
    };

    async getFilm(id: string): Promise<filmes> {
        const film = await this.database.filmes.findUnique({ where: { filme_id: id }, });
        if (!film) { throw new NotFoundException(' Filme informado não foi encontrado'); };
        return film;
    };

    async createFilm(dadosdto: CreateFilmDTO): Promise<filmes> {
        const film = await this.database.filmes.findUnique({ where: { nome_filme: dadosdto.nome_filme }, });
        if (film) {
            throw new ConflictException(' Esse filme já está cadastrado');
        };
        const criarFilme = await this.database.filmes.create({ data: dadosdto });
        return criarFilme;
    };

    async updateFilm(id: string, dataFilm: UpdateFilmDTO): Promise<filmes> {
        const updateFilme = await this.database.filmes.update({
            data: dataFilm,
            where: { filme_id: id }
        });
        return updateFilme;
    };

    async deleteFilm(id: string): Promise<{ message: string }> {
        const film = await this.database.filmes.findUnique({ where: { filme_id: id }, });
        if (!film) { throw new NotFoundException(' Filme informado não foi encontrado'); } else {
            await this.database.filmes.delete({ where: { filme_id: id }, });
            return { message: ' Filme deletado' };
        };
    };
}