import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
  // Between,
  // Equal,
  // ILike,
  // In,
  // IsNull,
  // LessThan,
  // LessThanOrEqual,
  // Like,
  // MoreThanOrEqual,
  Not,
  Repository,
} from 'typeorm';
import { UserModel } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileModel } from './entity/profile.entity';
import { PostModel } from './entity/post.entity';
import { TagModel } from './entity/tag.entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
    @InjectRepository(ProfileModel)
    private readonly profileRepository: Repository<ProfileModel>,
    @InjectRepository(PostModel)
    private readonly postRepository: Repository<PostModel>,
    @InjectRepository(TagModel)
    private readonly tagRepository: Repository<TagModel>,
  ) {}

  @Post('users')
  async postUser() {
    return this.userRepository.save({
      email: 'jieun@email.com',
    });
    // for (let i = 0; i < 100; i++) {
    //   await this.userRepository.save({
    //     email: `user-${i}@google.com`,
    //   });
    // }
  }

  @Get('users')
  getUsers() {
    return this.userRepository.find({
      where: {
        // id가 1이 아닌 경우만 가져오기
        id: Not(1),
        // // id가 30보다 작은 경우만 가져오기
        // id: LessThan(30),
        // // id 가 30보다 적거나 같은경우만 가져오기
        // id: LessThanOrEqual(30),
        // // id가 30보다 크거나 같은경우만 가져오기
        // id: MoreThanOrEqual(30),
        // // id가 30인 경우
        // id: Equal(30),
        // // 유사값
        // email: Like('%google%'),
        // // 대문자 소문자 구분 안하는 유사값
        // email: ILike('%google%'),
        // // 사이값
        // id: Between(10, 15),
        // // 해당되는 여러 개의 값
        // id: In([1, 3, 5, 7, 99]),
        // // id가 Null 인 경우
        // id: IsNull()
      },
    });
  }

  @Patch('users/:id')
  async patchUser(@Param('id') id: string) {
    const user = await this.userRepository.findOne({
      where: { id: +id },
    });
    return this.userRepository.save({
      ...user,
    });
  }

  @Delete('user/profile/:id')
  async deleteProfile(@Param('id') id: string) {
    await this.profileRepository.delete(+id);
  }

  @Post('user/profile')
  async createUserAndProfile() {
    const user = await this.userRepository.save({
      email: 'asdf@jieun.com',
      profile: {
        profileImg: 'asdf.jpg',
      },
    });

    // const profile = await this.profileRepository.save({
    //   profileImg: 'asdf.jpg',
    //   user,
    // });

    return user;
  }

  @Post('user/post')
  async createUserAndPosts() {
    const user = await this.userRepository.save({
      email: 'postuser@jieun.com',
    });

    await this.postRepository.save({ author: user, title: 'post1' });

    await this.postRepository.save({ author: user, title: 'post2' });

    return user;
  }

  @Post('posts/tags')
  async createPostTags() {
    const post1 = await this.postRepository.save({
      title: 'tag test 1',
    });

    const post2 = await this.postRepository.save({
      title: 'tag test 2',
    });

    const tag1 = await this.tagRepository.save({
      name: 'javascript',
      posts: [post1, post2],
    });

    const tag2 = await this.tagRepository.save({
      name: 'javascript',
      posts: [post1],
    });

    const post3 = await this.postRepository.save({
      title: 'NestJS Lecture',
      tages: [tag1, tag2],
    });

    return post3;
  }

  @Get('posts')
  getPosts() {
    return this.postRepository.find({
      relations: {
        tags: true,
      },
    });
  }

  @Get('tags')
  getTags() {
    return this.tagRepository.find({
      relations: {
        posts: true,
      },
    });
  }
}
