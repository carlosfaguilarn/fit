import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController  } from 'ionic-angular';
import { EJERCICIOS } from "../ejercicios.data";
 
@IonicPage()
@Component({
  selector: 'page-agregar-ejercicio',
  templateUrl: 'agregar-ejercicio.html',
})
export class AgregarEjercicioPage {
  public ejercicios = EJERCICIOS;
  public seleccionados: Array<any>;
  public returns: any; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController 
  ) {
    this.seleccionados = [];
    this.returns = {calorias:0};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarAlimentoPage');
  }

  elegir(ejercicio){ 
    //Recibir datos del ejercicio seleccionado
    let datos: any = {
      calorias: ejercicio.calorias,
      actividad: ejercicio.actividad
    };
    
    //Solicitar tiempo, enviando como parámetro el ejercicio seleccionado
    this.showPrompt(datos);
  }
  showPrompt(datos) {
    const prompt = this.alertCtrl.create({
      title: 'Duración',
      message: "Ingresa el tiempo en minutos",
      inputs: [
        {
          name: 'tiempo',
          placeholder: 'Tiempo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Duración: ', data);
            //Multiplicar las calorías del ejercicio seleccionado por el tiempo ingresado
            datos.calorias *= data.tiempo;

          
            this.returns.calorias += datos.calorias;  //Acumular calorías para regresar a la pantalla principal
            this.seleccionados.push(datos);           //Push al arreglo de ejercicios seleccionados
          }
        }
      ]
    });
    prompt.present();
  }
  submit(){
    this.viewCtrl.dismiss(this.returns);
  }
  quitar(i){
    
  }
}
interface Ejercicio{ 
  calorias: string; 
}
