import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IngredientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingredientes',
  templateUrl: 'ingredientes.html',
})
export class IngredientesPage {
  public ingredientes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ingredientes = navParams.get('ingredientes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientesPage');
  }
}
