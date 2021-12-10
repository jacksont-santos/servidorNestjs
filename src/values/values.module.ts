import { Module } from '@nestjs/common';
import { ValuesController } from './values.controller';
import { ValuesService } from './values.service';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ValuesController],
  providers: [ValuesService, PrismaService],
})
export class ValuesModule { }
