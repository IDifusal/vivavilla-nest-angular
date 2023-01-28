import { Component, Input, OnInit } from '@angular/core';
import { SoundService } from '../service/sound-service.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  constructor(private soundService: SoundService) {}
  @Input() visible = false;

  stopSound() {
    this.soundService.stopSound();
  }
}
