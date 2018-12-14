import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from "./global";
 
@Injectable()
export class AlimentosProvider {
  public url: string;

  constructor(public http: HttpClient) {
    console.log('Hello AlimentosProvider Provider');
    this.url = GLOBAL.url;
  }

  getFoods(){  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });  
    return this.http.get(this.url+'alimentos', {headers});
  } 

  getRecommendations(email:string){  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });  
    return this.http.get(this.url+'alimentos/recomendacion/'+email, {headers});
  }

  getExercises(){  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });  
    return this.http.get(this.url+'usuarios/ejercicios', {headers});
  } 
}
