//package dev
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componets
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';

//firebase config
//import { environment } from '../environments/environment';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';

//services
import { DataService } from './shared/Data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    ProjetosComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
