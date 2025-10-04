import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [PrismaModule, EventsModule, BookingsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
