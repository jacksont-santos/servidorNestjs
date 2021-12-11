import { Controller, Post, Body, Patch, Param, Get, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/createuser.dto';
import { UpdateUserDTO } from './dto/updateuser.dto';
import { usuarios } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/auth/auth-user.decorator';

@Controller('')
export class UserController {
  constructor(private service: UserService) { };

  @UseGuards(AuthGuard())
  @Get('listusers')
  getUsers(): Promise<any[]> {
    return this.service.getAllUsers();
  }

  @UseGuards(AuthGuard())
  @Get('user/:id')
  getUserById(@Param('id') id: string): Promise<usuarios> {
    return this.service.getUser(id);
  }

  @Post('create')
  createUser(@Body() data: CreateUserDTO): Promise<usuarios> {
    return this.service.createUser(data);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO): Promise<usuarios> {
    return this.service.updateUser(id, data);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  deleteById(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteUser(id);
  }

  @UseGuards(AuthGuard())
  @Patch('addList/:id')
  addList(@AuthUser() user: usuarios, @Param('id') filmeId: string) {
    return this.service.addList(user, filmeId);
  }
}