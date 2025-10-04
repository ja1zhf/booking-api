import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ example: 1, description: 'Event ID' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  eventId: number;

  @ApiProperty({ example: 'john_doe', description: 'Event total seats' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
