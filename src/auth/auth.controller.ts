import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { usuarios } from '@prisma/client';
import AuthUser from './auth-user.decorator';
import { AuthService } from './auth.service';
import { CrendentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {};

  @Post('login')
  login(@Body() data: CrendentialsDto) {
    return this.authService.login(data);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  profile(@AuthUser() user: usuarios): usuarios {
    return user;
  }
}