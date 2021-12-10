import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [FilmesController],
  providers: [FilmesService, PrismaService]
})
export class FilmesModule { }
