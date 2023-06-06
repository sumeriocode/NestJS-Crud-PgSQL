import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class TodoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public name: string;
}
