import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal } from 'ionic-angular';
import { AgregarAlimentoPage, AgregarEjercicioPage } from "../index.pages";

import { ModalController } from 'ionic-angular'; 
import { User } from "../../models/user.model";

 
@IonicPage()
@Component({
  selector: 'page-fit',
  templateUrl: 'fit.html',
})
export class FitPage {
  public loadProgress: number;
  public calorias: any;
  
  public alimentos_seleccionados: AlimentoSeleccionado;
  public total_consumidas: any = {};
  public calorias_quemadas: number;

  public modal: any;
  public ejercicio_modal: any;

  public identity;
//*ngIf="alimentos_seleccionados.aperitivo.calorias > 0"
  public nuevo_peso: number = 90.44;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.total_consumidas = {
      calorias: 0,
      carbohidratos: 0,
      proteinas: 0,
      grasas: 0
    }
    this.identity = JSON.parse(localStorage.getItem('identity'));

    this.calorias = {diarias: 2432, desayuno: 608, comida: 729, cena: 608, aperitivos: 486};
    this.loadProgress = Math.trunc(this.total_consumidas.calorias / this.calorias.diarias * 100);

    this.modal = this.modalCtrl.create(AgregarAlimentoPage); 
    this.ejercicio_modal = this.modalCtrl.create(AgregarEjercicioPage); 

    this.alimentos_seleccionados = {
      desayuno : {calorias:0,proteinas:0,carbohidratos:0,grasas:0},
      comida : {calorias:0,proteinas:0,carbohidratos:0,grasas:0},
      cena : {calorias:0,proteinas:0,carbohidratos:0,grasas:0},
      aperitivo : {calorias:0,proteinas:0,carbohidratos:0,grasas:0}
    };
    this.calorias_quemadas = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitPage');
  } 

  buscarAlimento(tipo: string){    
    this.modal.onDidDismiss(data => {
      switch(tipo){
        case 'desayuno':
          this.alimentos_seleccionados.desayuno = data; 
        break;
        case 'comida':
          this.alimentos_seleccionados.comida = data;
        break;
        case 'cena':
          this.alimentos_seleccionados.cena = data;
        break;
        case 'aperitivo':
          this.alimentos_seleccionados.aperitivo = data;
        break;
      }
      this.total_consumidas.calorias += data.calorias;
      this.total_consumidas.carbohidratos += data.carbohidratos;
      this.total_consumidas.proteinas += data.proteinas;
      this.total_consumidas.grasas += data.grasas;

      this.loadProgress = Math.trunc(this.total_consumidas.calorias / this.calorias.diarias * 100);

      this.nuevo_peso =  this.identity.peso - ((this.calorias.diarias-this.total_consumidas.calorias) / 9 / 1000);
      this.nuevo_peso = this.nuevo_peso * 100;
      this.nuevo_peso = Math.trunc(this.nuevo_peso);
      this.nuevo_peso = this.nuevo_peso / 100;
      console.log(this.alimentos_seleccionados); 
    });
    this.modal.present();
  } 
  buscarEjercicio(){
    this.ejercicio_modal.onDidDismiss(data => {
      this.calorias_quemadas = data.calorias;
      this.calorias.diarias += this.calorias_quemadas;

      this.loadProgress = Math.trunc(this.total_consumidas.calorias / this.calorias.diarias * 100);
    });
    this.ejercicio_modal.present();
  }
  actualizarPeso(){
    let data = {
      id: this.identity.id,
      peso: this.nuevo_peso
    }
    console.log(data);
  }
}

interface AlimentoSeleccionado{
  desayuno: Nutrientes;
  comida: Nutrientes;
  cena: Nutrientes;
  aperitivo: Nutrientes;
}
interface Nutrientes{
  calorias: number;
  carbohidratos: number;
  proteinas: number;
  grasas: number;
}