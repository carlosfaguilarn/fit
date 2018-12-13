import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { TabsPage, RegistrarPage } from "../index.pages";
import { User } from "../../models/user.model";

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage{
  loading: Loading;
  registerCredentials = { email: 'carlos@gmail.com', password: '123456' };
  public identity: User;
  public user: User;
 
  constructor(
    private navCtrl: NavController, 
    private userProvider: UserService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController
  ){
    this.user = new User('4','Carlos Aguilar','21','carlos@gmail.com','12345','168','90.55','4');
  }
 
  public createAccount() {
    this.navCtrl.push(RegistrarPage);
  }

  public login() {
    this.showLoading();
    if(this.registerCredentials.email=="carlos@gmail.com"){
      localStorage.setItem('identity', JSON.stringify(this.user));
      this.navCtrl.push(TabsPage);
    }else{
      this.showError("Acceso denegado");
    }
    /* 
    console.log(this.user);
    this.userProvider.signup(this.user).subscribe(
      response => {
        if(!response['user']){
          this.showError('No se puede acceder');
        }else{ 
          this.identity = response['user']; 
          localStorage.setItem('identity', JSON.stringify(this.identity));
          localStorage.setItem('token', (response['token']));
          this.navCtrl.push(TabsPage);
        }
      },
      error => {
          var errorMessage = <any> error;
          if(errorMessage != null){ 
            console.log(JSON.stringify(errorMessage));
            this.showError('No se puede ingresar');
          }
      }
    );*/
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: text,
        buttons: ['OK']
    });

    alert.present();
  }
}