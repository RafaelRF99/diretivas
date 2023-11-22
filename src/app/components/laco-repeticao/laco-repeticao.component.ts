import { Component } from '@angular/core';

@Component({
  selector: 'app-laco-repeticao',
  templateUrl: './laco-repeticao.component.html',
  styleUrls: ['./laco-repeticao.component.scss'],
})
export class LacoRepeticaoComponent {
  lists = ['Smart TV', 'Xaiomi', 'Iphone', 'Notebook', 'Computador'];

  delete(list: string, id: number) {
    this.lists = this.lists.filter((item) => item !== list);
    console.log(id);
  }
}
