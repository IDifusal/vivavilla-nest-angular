import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WebsocketService } from '../websocket/websocket.service';
import { Order } from './interfaces/interfaces';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private webSocketService: WebsocketService
  ) {}
  listOrdersYesterday: Order[] = [];
  listOrdersToday: Order[] = [];
  openModal: boolean = false;
  activeOrder: Order | any = [];
  urlBackend = environment.appBakend;
  sound = new Howl({
    src: ['/assets/audio.mp3'],
  });
  getOrders() {
    this.connectSocket();
    const req = this.http.get(`${this.urlBackend}orders/`);
    req.subscribe((data: any) => {
      this.listOrdersToday = data.todayProducts;
      this.listOrdersYesterday = data.yesterdayProducts;
    });
  }
  handleNewOrder() {
    this.playSound();
  }
  connectSocket() {
    this.webSocketService.connect();
    this.webSocketService.on('event').subscribe((data) => {
      console.log(JSON.parse(JSON.stringify(data as string)));
    });
  }
  emit() {
    this.webSocketService.emit('event', { data: 'some data' });
  }

  ngOnDestroy() {
    this.webSocketService.disconnect();
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
  handleOpen(order: Order) {
    this.activeOrder = order;
    this.openModal = true;
  }
  handleClose() {
    this.openModal = false;
  }
  playSound() {
    this.sound.play();
  }
  stopSound() {
    this.sound.stop();
  }
}
