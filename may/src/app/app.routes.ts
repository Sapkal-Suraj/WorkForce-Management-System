import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeatailsComponent } from './deatails/deatails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
      {
        path:"login",component:LoginComponent
      },
      {
        path:"home",component:HomeComponent
      },
      {
        path:"details/:id",component:DeatailsComponent
      },
      {
        path:"deatails",component:DeatailsComponent
      },
      {
        path:"addemp",component:AddemployeeComponent
      },
      {
        path:"addemp/:id",component:AddemployeeComponent
      },
      {
        path:"register",component:RegisterComponent
      },
    // {
    //     path:"**",component:NotfoundComponent
    // }, 
    
];
