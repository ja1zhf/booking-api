import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.event.findMany({
      include: {
        bookings: true,
      },
    });
  }

  create(dto: CreateEventDto) {
    return this.prisma.event.create({
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.event.delete({ where: { id } });
  }
}
