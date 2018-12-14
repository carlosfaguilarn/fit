import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserService } from "../../providers/user-service";
import { User } from "../../models/user.model";
   
@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  public user: User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserService,
    public alertCtrl: AlertController
  ) {
    this.user = new User('','','','','','','','','');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  onSubmit(){
    console.log(this.user);
    this.userProvider.register(this.user).subscribe(
      response => {
        if(!response['insertado']){
          this.showPrompt('Información','No se registró al usuario');
        }else{
          this.showPrompt('Información','Usuario registrado correctamente');
        }
        console.log(response);
      },
      error => {
          var errorMessage = <any> error;
          if(errorMessage != null) 
          this.showPrompt('Error', JSON.stringify(errorMessage));
      }
    );
  }
  showPrompt(title:string, message:string) {
    const prompt = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}

