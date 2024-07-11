import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';


export class AppModule { }
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



  