import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GenresDTO } from './dto/genre.dto';
import { generos } from '@prisma/client';
import "reflect-metadata";

@Injectable()
export class ValuesService {
    constructor (private database: PrismaService){}

    async getGenres(): Promise<generos[]> {
        const allGenres = await this.database.generos.findMany();
        return allGenres;
    };
    async createGenre(generodto: GenresDTO): Promise<generos> {
        const criarGenero = await this.database.generos.create({data: generodto});
        return criarGenero;
    };
}
