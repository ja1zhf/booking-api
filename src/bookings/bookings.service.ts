import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.booking.findMany();
  }

  async reserve(dto: CreateBookingDto) {
    return await this.prisma.$transaction(async (tx) => {
      const event = await tx.event.findUnique({
        where: {
          id: dto.eventId,
        },
        include: {
          bookings: {
            select: {
              userId: true,
            },
          },
        },
      });

      if (!event) {
        throw new NotFoundException(`Event with ID ${dto.eventId} not found`);
      }

      if (event.totalSeats - event.bookings.length <= 0) {
        throw new BadRequestException('Event is full');
      }

      if (event.bookings.find((booking) => booking.userId === dto.userId)) {
        throw new BadRequestException(
          'This user is already booked for this event',
        );
      }

      return tx.booking.create({
        data: dto,
        include: {
          event: true,
        },
      });
    });
  }

  remove(id: number) {
    return this.prisma.booking.delete({ where: { id } });
  }
}
