import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { SoundService } from './service/sound-service.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    ModalComponent,
    AlertComponent,
  ],
  providers: [SoundService],
  imports: [CommonModule],
  exports: [HeaderComponent, ModalComponent, AlertComponent],
})
export class SharedModule {}
