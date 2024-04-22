import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
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
  postUser() {
    return this.userRepository.save({
      email: 'jieun@email.com',
    });
  }

  @Get('users')
  getUsers() {
    return this.userRepository.find({
      // 가져오고 싶은 관계
      relations: {
        profile: true,
        posts: true,
      },
      // 어떤 프로퍼티를 선택할 지 - 기본 값은 모든 프로퍼티
      // select를 정의하면 정의된 프로퍼티만 가져온다.
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        // profile 에서 id 만 가져오고 싶은 경우
        profile: {
          id: true,
        },
      },
      // 필터링 조건 입력 - and 조건
      where: {
        version: 1,
        // profile 의 id 가 3인 경우
        // profile: {
        //   id: 3,
        // },
      },
      // 리스트로 적으면 or 조건
      // where: [
      //   {
      //     version: 1,
      //   },
      //   {
      //     version: 2,
      //   },
      // ],
      // 정렬 - 오름차순(ASC), 내림차순(DESC)
      order: {
        // id를 오름차순으로 정렬
        id: 'ASC',
      },
      // 처음 몇 개를 제외할지
      skip: 0,
      // 몇 개를 가져올지 - 기본값 전체(0)
      take: 1,
    });
  }

  @Patch('users/:id')
  async patchUser(@Param('id') id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
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
