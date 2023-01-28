import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from 'src/app/dashboard/interfaces/interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() visible = false;
  @Input() order: Order | undefined;
  @Output() close = new EventEmitter<void>();
  closeModal() {
    this.close.emit();
  }
}
