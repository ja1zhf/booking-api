import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CleanEventDto, EventDto } from 'src/events/dto/event.dto';

export class BookingDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  eventId: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({
    type: () => CleanEventDto,
  })
  event: EventDto;
}

export class CleanBookingDto extends OmitType(BookingDto, ['event'] as const) {}
