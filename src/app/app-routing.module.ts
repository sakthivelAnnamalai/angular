import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'layout',
    component:HomeComponent,
  children: [
    // {
    //   path:'crud',
    //   component:StartComponent,
    // }  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
