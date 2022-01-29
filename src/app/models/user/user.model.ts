import { Column, Table } from 'sequelize-typescript';
import { Common } from '../utils/common.model';

@Table
export class User extends Common {
  @Column({ field: 'first_name' })
  firstName: string;
  @Column({ field: 'last_name' })
  lastName: string;
  @Column
  email: string;
  @Column
  password: string;
  @Column({ field: 'is_active', defaultValue: false })
  isActive: boolean;
}
