import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarEjercicioPage } from './agregar-ejercicio';

@NgModule({
  declarations: [
    AgregarEjercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarEjercicioPage),
  ],
})
export class AgregarEjercicioPageModule {}
