import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor(private socket: Socket) {}

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  on(event: string) {
    return this.socket.fromEvent(event);
  }

  emit(event: string, payload: any) {
    this.socket.emit(event, payload);
  }
}
