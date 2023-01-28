import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard-service.service';
import { Order } from '../../interfaces/interfaces';
@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent {
  constructor(private dashboardModule: DashboardService) {}
  get listOrdersToday(): Order[] {
    return this.dashboardModule.listOrdersToday;
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
