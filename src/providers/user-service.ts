import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GLOBAL } from "./global";
import { AlertController } from "ionic-angular";

@Injectable()

export class UserService {
  public url: string;
  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController
  ){
    this.url = GLOBAL.url;
  } 
 
  public login(credentials) {
    let params = JSON.stringify(credentials);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.post(this.url+'login', params, options);
  }
 
  public register(user) {
    let params = JSON.stringify(user);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.post(this.url+'usuarios/usuario', params, options);
  }  

  public update_weight(data, email:string) {
    let params = JSON.stringify(data);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.put(this.url+'usuarios/peso/'+email, params, options);
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