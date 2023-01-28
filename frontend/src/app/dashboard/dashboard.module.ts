import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { SharedModule } from '../shared/shared.module';
import { ListCardComponent } from './components/list-card/list-card.component';

@NgModule({
  declarations: [DashboardPageComponent, HistorialComponent, ListCardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [DashboardPageComponent, ListCardComponent],
})
export class DashboardModule {}
