import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ProfileModel } from './profile.entity';
import { PostModel } from './post.entity';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class UserModel {
  @PrimaryColumn() // 테이블 안에서 각각의 row를 구분할 수 있는 컬럼 -> 반드시 존재해야 한다.
  @PrimaryGeneratedColumn('uuid') // 자동으로 id를 생성 - uuid를 인자로 넣어주면, 자동으로 uuid 값을 키로 생성한다.
  id: string;

  @Column()
  email: string;

  // @Column({
  //   // 데이터베이스에서 인지하는 칼럼 타입
  //   type: 'varchar', // typescript 로 정의해둔 타입을 기반으로 자동 유추
  //   // 데이터베이스 컬럼 이름
  //   name: 'title', // 프로퍼티 이름으로 자동 유추
  //   // 값의 길이
  //   length: 300,
  //   // null 가능 여부
  //   nullable: true,
  //   // update 가능 여부
  //   update: true, // false 이면 처음 저장할때만 값 지정 가능, 이후에는 변경 불가능 - 버전 오류가 있음
  //   // find() 실행할 때 값을 불러올지
  //   select: true, // 기본값 true, false 이면 값을 불러오지 않음
  //   // 아무것도 입력하지 않았을 때 기본으로 입력되는 값
  //   default: 'default value',
  //   // 컬럼 중에서 유일한 값이 되어야 하는지
  //   unique: false, // 기본값 false
  // })
  // title: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  @CreateDateColumn() // 데이터가 생성되는 날짜와 시간
  createdAt: Date;

  @UpdateDateColumn() // 데이터가 수정되는 날짜와 시간
  updatedAt: Date;

  @VersionColumn() // 데이터가 업데이트 될때마다 1씩 증가한다. 처음 생성되면 값은 1
  version: number;

  @Column()
  @Generated('increment') // 데이터를 생성할 때마다 생성 'increment' 를 인자로 넣으면 증가하는 숫자를 자동으로 생성
  additionalId: number;

  @OneToOne(() => ProfileModel, (profile) => profile.user, {
    // find() 실행할 때마다 항상 같이 가져올 relation - 기본값 false
    eager: true,
    // 저장할 때 relation을 한번에 같이 저장 가능 - 기본값 false
    cascade: true,
    // null 가능 여부 - 기본값 false
    nullable: true,
    // 관계가 삭제됐을 때
    // no action : 아무것도 안함/ cascade : 참조하는 row 도 함께 삭제 / set null : 참조하는 Row에서 참조 id를 null로 변경
    // set default : 기본 세팅으로 설정 (테이블의 기본 세팅) / restrict : 참조하고 있는 row 가 있는 경우 참조 당하는 row 삭제 불가
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  profile: ProfileModel;

  @OneToMany(() => PostModel, (post) => post.author)
  posts: PostModel[];
}
