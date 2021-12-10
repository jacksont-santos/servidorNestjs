import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GenresDTO } from './dto/genre.dto';
import { ActorDTO } from './dto/actor.dto';
import { ProducersDTO } from './dto/producer.dto';
import { generos } from '@prisma/client';
import { atores } from '@prisma/client';
import { produtoras } from '@prisma/client';
import "reflect-metadata";

@Injectable()
export class ValuesService {
    constructor(private database: PrismaService) { };

    async getGenres(): Promise<generos[]> {
        const allGenres = await this.database.generos.findMany();
        return allGenres;
    };
    async createGenre(generodto: GenresDTO): Promise<generos> {
        const criarGenero = await this.database.generos.create({ data: generodto });
        return criarGenero;
    };

    async getActors(): Promise<atores[]> {
        const allActors = await this.database.atores.findMany();
        return allActors;
    };
    async createActor(atordto: ActorDTO): Promise<atores> {
        const criarActor = await this.database.atores.create({ data: atordto });
        return criarActor;
    };

    async getProducers(): Promise<produtoras[]> {
        const allProducers = await this.database.produtoras.findMany();
        return allProducers;
    };
    async createProducer(produtoradto: ProducersDTO): Promise<produtoras> {
        const criarProdutora = await this.database.produtoras.create({ data: produtoradto });
        return criarProdutora;
    };
}
