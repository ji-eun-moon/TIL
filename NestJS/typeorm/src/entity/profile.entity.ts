import {
  Column,
  Entity,
  // JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserModel } from './user.entity';

@Entity()
export class ProfileModel {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserModel, (user) => user.profile)
  // @JoinColumn() // UserModel 테이블의 ID를 가지고 있음
  user: UserModel;

  @Column()
  profileImg: string;
}
