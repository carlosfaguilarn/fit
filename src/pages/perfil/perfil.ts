import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { User } from "../../models/user.model";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public identity: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.identity = JSON.parse(localStorage.getItem('identity'));
    console.log("Identidad: ", JSON.parse(localStorage.getItem('identity'))); 
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad PerfilPage', this.identity);
  }
  recargarTarjetas(refresher:Refresher){
    setTimeout( ()=>{   
      this.identity = JSON.parse(localStorage.getItem('identity'));
      refresher.complete(); 
    },200);
  }
}
