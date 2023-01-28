import { Component } from '@angular/core';
import { Order } from '../../interfaces/interfaces';
import { DashboardService } from '../../dashboard-service.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent {
  constructor(private dashboardModule: DashboardService) {}

  get listOrders(): Order[] {
    return this.dashboardModule.listOrdersYesterday;
  }
  handleOpen(item: Order) {
    this.dashboardModule.handleOpen(item);
  }
  handleClose() {
    this.dashboardModule.handleClose();
  }
  get activeOrder() {
    return this.dashboardModule.activeOrder;
  }
  get openModal() {
    return this.dashboardModule.openModal;
  }
}
