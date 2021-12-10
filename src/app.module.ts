import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ValuesModule } from './values/values.module';
import { FilmesModule } from './filmes/filmes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ValuesModule, FilmesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
