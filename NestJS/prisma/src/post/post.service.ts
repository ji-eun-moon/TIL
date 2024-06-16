import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostSearchOptionDTO } from './dto/post-search-option.dto';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.post.findMany();
  }

  findById(id: string) {
    return this.prismaService.post.findUnique({
      where: { id },
    });
  }

  async search(option: PostSearchOptionDTO): Promise<[Post[], number]> {
    const { pageNo, pageSize, query, orderBy, align, userId } = option;

    const where: Prisma.PostWhereInput = {};

    if (query) {
      where.OR = [
        { title: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
      ];
    }

    if (userId) {
      where.userId = userId;
    }

    const vocs = await this.prismaService.post.findMany({
      where,
      orderBy: { [orderBy || 'id']: align || 'desc' },
      take: pageSize,
      skip: (pageNo - 1) * pageSize,
    });

    const count = await this.prismaService.post.count({ where });

    return [vocs, count];
  }

  create(body: CreatePostDTO, userId?: string) {
    return this.prismaService.post.create({
      data: {
        ...body,
        user: userId ? { connect: { id: userId } } : undefined,
      },
    });
  }
}
