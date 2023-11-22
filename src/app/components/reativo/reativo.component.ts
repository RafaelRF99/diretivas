import { Component } from '@angular/core';

@Component({
  selector: 'app-reativo',
  templateUrl: './reativo.component.html',
  styleUrls: ['./reativo.component.scss'],
})
export class ReativoComponent {
  isOpen = true;

  handleOpen() {
    this.isOpen = !this.isOpen;
  }
}
