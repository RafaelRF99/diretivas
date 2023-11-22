import { Component } from '@angular/core';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss'],
})
export class FormModelComponent {
  lists: string[] = [];
  item: string = '';

  send() {
    this.lists.push(this.item);
  }
}
