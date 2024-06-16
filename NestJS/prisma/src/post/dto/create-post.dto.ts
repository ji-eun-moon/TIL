import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty({ message: '제목을 입력해 주세요.' })
  @ApiProperty({ description: '게시글 제목' })
  title: string;

  @ApiProperty({ description: '게시글 내용' })
  @IsNotEmpty({ message: '내용을 입력해 주세요.' })
  content: string;
}
