import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsModel } from './entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsModel)
    private readonly postsRepository: Repository<PostsModel>,
  ) {}

  // 전체 post 불러오기
  async getAllPosts() {
    return this.postsRepository.find();
  }

  // 특정 post 불러오기
  async getPostById(id: number) {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  // post 생성하기
  async createPost(author: string, title: string, content: string) {
    // 1. create : 저장할 객체 생성
    const post = this.postsRepository.create({
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    });

    // 2. save : 생성한 객체를 저장
    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async updatePost(id: number, author: string, title: string, content: string) {
    // 1. save : 데이터가 존재하지 않는다면 데이터 새로 생성, 있으면 수정
    const post = await this.postsRepository.findOne({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException();
    }

    if (author) {
      post.author = author;
    }

    if (title) {
      post.title = title;
    }

    if (content) {
      post.content = content;
    }

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async deletePost(postId: number) {
    const post = await this.postsRepository.findOne({
      where: { id: postId },
    });

    if (!post) {
      throw new NotFoundException();
    }
    await this.postsRepository.delete(postId);

    return postId;
  }
}
