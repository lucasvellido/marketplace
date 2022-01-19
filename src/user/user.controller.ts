import { User } from './user.model';
import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
