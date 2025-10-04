import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CleanEventDto, EventDto } from './dto/event.dto';

@ApiTags('Events')
@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({
    type: EventDto,
    isArray: true,
  })
  findAll() {
    return this.eventsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new events' })
  @ApiResponse({
    status: 201,
    type: CleanEventDto,
  })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete event by id' })
  @ApiResponse({
    status: 200,
    type: CleanEventDto,
  })
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
