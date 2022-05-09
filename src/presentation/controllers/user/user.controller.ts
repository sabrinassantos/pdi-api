import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreate } from '../../../domain/entities/user';
import { UserService } from '../../../domain/usecases/user.service';



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async create(@Body() user: UserCreate) {    
    await this.userService.create(user);    
  }
  @Get('')
  async findAll() {    
    return await this.userService.getAll();
  }
}
