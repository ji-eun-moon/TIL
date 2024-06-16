import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { SearchOptionDTO } from 'src/common/dtos/search-option.dto';

export class PostSearchOptionDTO extends SearchOptionDTO {
  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  userId?: string;
}
