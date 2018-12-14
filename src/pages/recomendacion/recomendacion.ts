import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { IngredientesPage } from "../index.pages"; 
import { AlimentosProvider } from "../../providers/alimentos";
import { User } from "../../models/user.model";

@IonicPage()
@Component({
  selector: 'page-recomendacion',
  templateUrl: 'recomendacion.html',
})
export class RecomendacionPage {
  public recomendaciones: Array<Recomendacion>;
  public identity: User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alimentosProvider: AlimentosProvider
  ) {

    /*this.recomendaciones = [
      {
        tipo: "Desayuno",
        titulo: "Cereal con leche",
        descripcion: "Cereal de trigo con leche y frutas",
        img: "https://alexandercoffees.files.wordpress.com/2014/05/cereal-con-leche.jpg",
        ingredientes: ["cereal", "leche","frutas"]
      }, 
      {
        tipo: "Comida",
        titulo: "Ensalada de pollo",
        descripcion: "Ensalada de pechuga de pollo con vegetales y granos",
        img: "http://www.omgandhi.es/wp-content/uploads/2016/11/ensalada-pollo.png",
        ingredientes: ["Pechuga de pollo", "Lechuga","Tomate","Aceitunas"]
      }, 
      {
        tipo: "Cena",
        titulo: "Sandwitch",
        descripcion: "Sandwitch de jamón y queso",
        img: "https://www.luvmyrecipe.com/wp-content/uploads/Schezwan-Chutney-03.jpg",
        ingredientes: ["Pan integral", "Jamón","Queso"]
      }, 
    ];*/ 
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.getRecomendaciones();
  }

  getRecomendaciones(){
    this.alimentosProvider.getRecommendations(this.identity.email).subscribe(
      response => {
        if(!response['recomendaciones']){
          console.log('No se recibieron recomendaciones');
        }else{
          this.recomendaciones = response['recomendaciones'];
        }
      },error =>{

      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomendacionPage');
  }

  verIngredientes(ingredientes){
    let modal = this.modalCtrl.create(IngredientesPage, {ingredientes});
    modal.present();
  }
} 
interface Recomendacion{
  tipo: string;
  titulo: string;
  descripcion: string;
  img: string;
  ingredientes: Array<string>;
}