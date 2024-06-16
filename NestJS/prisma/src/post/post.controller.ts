import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { PostService } from './post.service';
import { PostSearchOptionDTO } from './dto/post-search-option.dto';
import { PostDTO } from './dto/post.dto';
import { plainToInstance } from 'class-transformer';
import { Anonymous } from 'src/auth/decorators/anonymous.decorator';
import { CreatePostDTO } from './dto/create-post.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from '@prisma/client';

@ApiTags('Post')
@Controller('post')
export class VocController {
  constructor(private readonly postService: PostService) {}

  @Get('search')
  @ApiOperation({
    summary: '게시글 검색',
    description: '게시글을 검색합니다.',
  })
  @ApiOkResponse({
    type: PostSearchOptionDTO,
    schema: {
      items: {
        type: 'object',
        $ref: getSchemaPath(PostDTO),
      },
    },
  })
  async search(@Query() option: PostSearchOptionDTO) {
    const [posts, count] = await this.postService.search(option);

    return {
      items: plainToInstance(PostDTO, posts),
      pageInfo: {
        pageNo: option.pageNo,
        pageSize: option.pageSize,
        totalPages: Math.ceil(count / option.pageSize),
        totalItems: count,
        pageItems: posts.length,
      },
    };
  }

  @Get(':id')
  @ApiOperation({
    summary: '오류 제보 조회',
    description: '오류 제보를 조회합니다.',
  })
  @ApiOkResponse({ type: PostDTO })
  async findById(@Param('id') id: string) {
    const voc = await this.postService.findById(id);
    if (!voc) throw new NotFoundException('존재하지 않는 글입니다.');
    return plainToInstance(PostDTO, voc);
  }

  @Post()
  @ApiOperation({
    summary: '오류 제보 등록',
    description: '오류 제보를 등록합니다.',
  })
  @Anonymous()
  @ApiOkResponse({ type: PostDTO })
  async create(@Body() body: CreatePostDTO, @GetUser() user?: User) {
    const created = await this.postService.create(body, user?.id);

    return plainToInstance(PostDTO, created);
  }
}
