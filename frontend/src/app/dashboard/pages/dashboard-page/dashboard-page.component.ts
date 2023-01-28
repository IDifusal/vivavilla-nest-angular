import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard-service.service';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.dashboardService.getOrders();
  }
}
