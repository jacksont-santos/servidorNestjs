import { Controller, Post, Body, Patch, Param, Get, Delete, UseGuards } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmDTO } from './dto/createfilme.dto';
import { UpdateFilmDTO } from './dto/updatefilme.dto';
import { filmes } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('filmes')
export class FilmesController {
  constructor(private service: FilmesService) { };

  @Get('list')
  getlist(): Promise<any[]> {
    return this.service.getAllfilms();
  }

  @Get('filme/:id')
  getUserById(@Param('id') id: string): Promise<filmes> {
    return this.service.getFilm(id);
  }

  @UseGuards(AuthGuard())
  @Post('create')
  createUser(@Body() data: CreateFilmDTO): Promise<filmes> {
    return this.service.createFilm(data);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  updateUser(@Param('id') id: string, @Body() data: UpdateFilmDTO): Promise<filmes> {
    return this.service.updateFilm(id, data);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  deleteById(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteFilm(id);
  }
}
