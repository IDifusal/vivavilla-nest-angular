import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdesGateway } from './orders.gateway';
import { AppService } from '../app.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private webSocketService: OrdesGateway,
    private readonly appService: AppService,
  ) {}

  @Get('')
  getOrders() {
    return this.appService.getOrders();
  }

  @Get('/all-orders')
  getAllOrders(): string {
    return 'Get All orders';
  }

  @Post()
  postOrder(@Body() task): string {
    const { id } = task;
    if (id) {
      this.webSocketService.sendEvent(task);
      return `${task}`;
    } else {
      return 'Body not valid';
    }
  }
}
