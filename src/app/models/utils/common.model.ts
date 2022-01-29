import { Column, Model } from 'sequelize-typescript';

export class Common extends Model {
  @Column({ defaultValue: false })
  deleted: boolean;
  @Column({ field: 'created_id' })
  createdId: number;
  @Column({ field: 'updater_id' })
  updaterId: number;
}
