import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log('alora');
  }
  getHello(): string {
    return 'Hola migos GAAAASSSS HIDRP';
  }
}
