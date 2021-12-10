import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ValuesService } from './values.service';
import { GenresDTO } from './dto/genre.dto';
import { ActorDTO } from './dto/actor.dto';
import { ProducersDTO } from './dto/producer.dto';
import { generos } from '@prisma/client';
import { atores } from '@prisma/client';
import { produtoras } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('values')
export class ValuesController {
  constructor(private service: ValuesService) { };

  @UseGuards(AuthGuard())
  @Get('generos')
  getUsers(): Promise<any[]> {
    return this.service.getGenres();
  }

  @UseGuards(AuthGuard())
  @Post('creategenero')
  createUser(@Body() data: GenresDTO): Promise<generos> {
    return this.service.createGenre(data);
  }

  @UseGuards(AuthGuard())
  @Get('atores')
  get(): Promise<any[]> {
    return this.service.getActors();
  }

  @UseGuards(AuthGuard())
  @Post('createator')
  create(@Body() data: ActorDTO): Promise<atores> {
    return this.service.createActor(data);
  }

  @UseGuards(AuthGuard())
  @Get('produtora')
  getProducers(): Promise<any[]> {
    return this.service.getProducers();
  }

  @UseGuards(AuthGuard())
  @Post('createprodutora')
  createProducer(@Body() data: ProducersDTO): Promise<produtoras> {
    return this.service.createProducer(data);
  }
}
