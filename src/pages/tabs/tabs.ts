import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage, FitPage, RecomendacionPage } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = PerfilPage;
  tab2 = FitPage;
  tab3 = RecomendacionPage;

  constructor() {

  }
}
