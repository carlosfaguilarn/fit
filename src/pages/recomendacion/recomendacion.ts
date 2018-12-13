import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-recomendacion',
  templateUrl: 'recomendacion.html',
})
export class RecomendacionPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomendacionPage');
  }
} 