import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos-cor',
  templateUrl: './atributos-cor.component.html',
  styleUrls: ['./atributos-cor.component.scss'],
})
export class AtributosCorComponent {
  cor: string = 'disable';

  trocar() {
    if (this.cor === 'disable') {
      this.cor = 'enable';
    } else {
      this.cor = 'disable';
    }
  }
}
