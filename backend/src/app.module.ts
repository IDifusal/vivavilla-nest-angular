import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdesGateway } from './orders/orders.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, OrdesGateway],
})
export class AppModule {}
