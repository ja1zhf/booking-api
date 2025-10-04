import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingDto } from './dto/booking.dto';
import { CreateBookingDto } from './dto/create-booking.dto';

@ApiTags('Bookings')
@Controller('api/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({
    type: BookingDto,
    isArray: true,
  })
  findAll() {
    return this.bookingsService.findAll();
  }

  @Post('reserve')
  @ApiOperation({ summary: 'Make a reservation' })
  @ApiResponse({
    status: 201,
    type: BookingDto,
  })
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.reserve(createBookingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete reservation by id' })
  @ApiResponse({
    status: 200,
    type: BookingDto,
  })
  remove(@Param('id') id: string) {
    return this.bookingsService.remove(+id);
  }
}
