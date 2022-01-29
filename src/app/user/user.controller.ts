import { User } from '../models/user/user.model';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InputUserDto } from '../models/user/dto/input-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() inputUserDto: InputUserDto): Promise<User> {
    return await this.userService.create(inputUserDto);
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.userService.findByIdOrFail(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() inputUserDto: InputUserDto,
  ): Promise<any> {
    return await this.userService.update(id, inputUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async markAsDeleted(@Param('id') id: number) {
    await this.userService.markAsDeleted(id);
  }

  /*TODO Make pagination*/
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
