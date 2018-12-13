import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-agregar-alimento',
  templateUrl: 'agregar-alimento.html',
})
export class AgregarAlimentoPage {
  public alimentos: Array<any>;
  public seleccionados: Array<any>;
  public returns: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
    this.alimentos = [
      {id:1, descripcion:'Huevos', calorias: 34, carbohidratos:12, proteinas: 8, grasas:10},
      {id:2, descripcion:'Pan', calorias: 100, carbohidratos:34, proteinas: 65, grasas:12},
      {id:3, descripcion:'Carne', calorias: 165, carbohidratos:10, proteinas: 12, grasas:22},
      {id:4, descripcion:'Leche', calorias: 67, carbohidratos:15, proteinas: 10, grasas:12},
      {id:5, descripcion:'Tomate', calorias: 13, carbohidratos:9, proteinas: 9, grasas:16},
      {id:6, descripcion:'Naranja', calorias: 34, carbohidratos:8, proteinas: 11, grasas:19},
      {id:7, descripcion:'Chocolate', calorias: 200, carbohidratos:7, proteinas: 18, grasas:20},
      {id:8, descripcion:'Caramelo', calorias: 132, carbohidratos:9, proteinas: 10, grasas:21},
      {id:9, descripcion:'Refresco', calorias: 250, carbohidratos:11, proteinas: 9, grasas:12},
      {id:10, descripcion:'Galleta', calorias: 230, carbohidratos:10, proteinas: 10, grasas:15},
      {id:11, descripcion:'Tortilla', calorias: 60, carbohidratos:9, proteinas: 12, grasas:16},
    ];
    this.seleccionados = [];
    this.returns = {calorias:0, carbohidratos: 0, proteinas: 0, grasas: 0};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarAlimentoPage');
  }

  elegir(alimento){ 
    let data: any = {
      descripcion: alimento.descripcion,
      calorias: alimento.calorias,
      carbohidratos: alimento.carbohidratos,
      proteinas: alimento.proteinas,
      grasas: alimento.grasas,
    };
 
    this.showPrompt(data);
  }
  showPrompt(datos) {
    const prompt = this.alertCtrl.create({
      title: 'Cantidad',
      message: "¿Cuántas porciones comiste?",
      inputs: [
        {
          name: 'cantidad',
          placeholder: 'Cantidad'
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
            console.log('Cantidad: ', data);
            //Multiplicar las calorías del ejercicio seleccionado por el tiempo ingresado
            datos.calorias *= data.cantidad;
            datos.carbohidratos *= data.cantidad;
            datos.proteinas *= data.cantidad;
            datos.grasas *= data.cantidad;

            //Acumular nutrientes para regresar a la pantalla principal
            this.returns.calorias += datos.calorias;
            this.returns.carbohidratos += datos.carbohidratos;
            this.returns.proteinas += datos.proteinas;
            this.returns.grasas += datos.grasas;
 
            //Push al arreglo de ejercicios seleccionados
            this.seleccionados.push(datos);           
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
interface Alimento{
  id: string;
  descripcion: string;
  calorias: string;
  carbohidratos: string;
  proteinas: string;
  grasas: string;
}