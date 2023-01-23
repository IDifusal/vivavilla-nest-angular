import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderScreenComponent } from './orders/order-screen/order-screen.component';

const routes: Routes = [
  {
    path: '',
    component: OrderScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
