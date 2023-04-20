import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { Preg01Component } from './components/preg01/preg01.component';
import { Preg02Component } from './components/preg02/preg02.component';
import { Preg03Component } from './components/preg03/preg03.component';
import { Preg04Component } from './components/preg04/preg04.component';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './principal/principal.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent,pathMatch:"full"},
  {path: 'principal', component: PrincipalComponent},
  {path: 'preg01', component: Preg01Component},
  {path: 'preg02', component: Preg02Component},
  {path: 'preg03', component: Preg03Component},
  {path: 'preg04', component: Preg04Component},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EncuestaComponent,
    EncuestaComponent,
    EncuestaComponent,
    Preg01Component,
    Preg02Component,
    Preg03Component,
    Preg04Component,
    HomeComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
