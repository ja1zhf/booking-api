import { ApiProperty, OmitType } from '@nestjs/swagger';
import { BookingDto, CleanBookingDto } from 'src/bookings/dto/booking.dto';

export class EventDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  totalSeats: number;

  @ApiProperty({
    type: () => [CleanBookingDto],
  })
  bookings: BookingDto[];
}

export class CleanEventDto extends OmitType(EventDto, ['bookings'] as const) {}
