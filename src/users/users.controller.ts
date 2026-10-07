import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity.js';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; email: string }): Promise<User> {
    return this.usersService.create(body);
  }
}
