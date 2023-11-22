import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { LacoRepeticaoComponent } from './components/laco-repeticao/laco-repeticao.component';
import { ReativoComponent } from './components/reativo/reativo.component';
import { AtributosCorComponent } from './components/atributos-cor/atributos-cor.component';

import { FormsModule } from '@angular/forms';
import { FormModelComponent } from './components/form-model/form-model.component'; //ngModel

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LacoRepeticaoComponent,
    ReativoComponent,
    AtributosCorComponent,
    FormModelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
