import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PostDTO {
  @Expose()
  @ApiProperty({ description: 'ID' })
  id: string;

  @Expose()
  @ApiProperty({ description: '게시물 제목' })
  title: string;

  @Expose()
  @ApiProperty({ description: '게시물 내용' })
  content: string;

  @Expose()
  @ApiProperty({ description: '등록일자', type: 'Date' })
  createdAt: Date;
}
