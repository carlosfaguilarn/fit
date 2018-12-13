import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GLOBAL } from "./global";

@Injectable()

export class UserService {
  public url: string;
  constructor(
    private http: HttpClient
  ){
    this.url = GLOBAL.url;
  } 
 
  public login(credentials) {
    let params = JSON.stringify(credentials);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.post(this.url+'user/login', params, options);
  }
 
  public register(user) {
    let params = JSON.stringify(user);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.post(this.url+'user/register', params, options);
  }  
}