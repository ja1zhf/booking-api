import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'Birthday Party', description: 'Event name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 100, description: 'Event total seats' })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(1000000)
  totalSeats: number;
}
