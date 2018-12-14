import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component'; 
import { FiltroPipe } from "../pipes/filtro/filtro";

import { 
  TabsPage,
  PerfilPage,
  FitPage,
  RecomendacionPage,
  AgregarAlimentoPage,
  AgregarEjercicioPage,
  LoginPage,
  RegistrarPage,
  IngredientesPage
} from "../pages/index.pages";
import { UserService } from '../providers/user-service';
import { AlimentosProvider } from '../providers/alimentos';

@NgModule({
  declarations: [
    MyApp,
    FiltroPipe,
    ProgressBarComponent,
    TabsPage,
    PerfilPage,
    FitPage,
    RecomendacionPage,
    AgregarAlimentoPage,
    AgregarEjercicioPage,
    LoginPage,
    RegistrarPage,
    IngredientesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PerfilPage,
    FitPage,
    RecomendacionPage,
    AgregarAlimentoPage,
    AgregarEjercicioPage,
    LoginPage,
    RegistrarPage,
    IngredientesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AlimentosProvider
  ]
})
export class AppModule {}
