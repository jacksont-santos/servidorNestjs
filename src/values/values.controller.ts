import { Controller, Post, Body, Get } from '@nestjs/common';
import { ValuesService } from './values.service';
import { GenresDTO } from './dto/genre.dto';
import { generos } from '@prisma/client';

@Controller('values')
export class ValuesController {
    constructor(private service: ValuesService) {};

    @Get('list')
  getUsers(): Promise<any[]> {
    return this.service.getGenres();
  }

  @Post('create')
  createUser(@Body() data: GenresDTO): Promise<generos> {
    return this.service.createGenre(data);
  }
}
