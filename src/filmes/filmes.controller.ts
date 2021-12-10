import { Controller, Post, Body, Patch, Param, Get, Delete } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmDTO } from './dto/createfilme.dto';
import { UpdateFilmDTO } from './dto/updatefilme.dto';
import { filmes } from '@prisma/client';

@Controller('filmes')
export class FilmesController {
        constructor(private service: FilmesService) {};
      
        @Get('list')
        getlist(): Promise<any[]> {
          return this.service.getAllfilms();
        }
      
        @Get('filme/:id')
        getUserById(@Param('id') id: string): Promise<filmes> {
          return this.service.getFilm(id);
        }
      
        @Post('create')
        createUser(@Body() data: CreateFilmDTO): Promise<filmes> {
          return this.service.createFilm(data);
        }
      
        @Patch('update/:id')
        updateUser(@Param('id') id: string, @Body() data: UpdateFilmDTO): Promise<filmes> {
          return this.service.updateFilm(id, data);
        }
      
        @Delete('delete/:id')
        deleteById(@Param('id') id: string): Promise<{ message: string }> {
          return this.service.deleteFilm(id);
        }
}
