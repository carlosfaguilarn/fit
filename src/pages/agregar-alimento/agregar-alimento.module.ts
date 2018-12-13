import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarAlimentoPage } from './agregar-alimento';

@NgModule({
  declarations: [
    AgregarAlimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarAlimentoPage),
  ],
})
export class AgregarAlimentoPageModule {}
