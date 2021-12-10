import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService, PrismaService]
})
export class FilmesModule {}
