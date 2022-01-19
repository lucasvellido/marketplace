import { User } from './user.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule],
})
export class UserModule {}
