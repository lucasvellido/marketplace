import { User } from '../models/user/user.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InputUserDto } from '../models/user/dto/input-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User,
  ) {}

  async create(inputUserDto: InputUserDto): Promise<User> {
    return await this.userRepository.create(inputUserDto);
  }

  async findByIdOrFail(id: number): Promise<User> {
    try {
      return await this.userRepository.findByPk(id);
    } catch (error) {
      throw new NotFoundException(error.massage);
    }
  }

  async update(id: number, inputUserDto: InputUserDto): Promise<any> {
    const userSaved = await this.userRepository
      .update(inputUserDto, {
        where: { id: id },
        returning: true,
      })
      .then(async (updatedUser) => {
        return await updatedUser;
      })
      .catch((error) => {
        /* TODO put a log service */
        console.log(error);
      });
    return userSaved;
  }

  async markAsDeleted(id: number) {
    /*TODO call exists before*/
    const user = await this.findByIdOrFail(id);
    this.userRepository.update({ deleted: true }, { where: { id: id } });
  }

  /*TODO Make pagination*/
  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
