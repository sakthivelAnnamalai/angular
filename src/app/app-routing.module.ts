import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViswaComponent } from './viswa/viswa.component';

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
    {
      path:'viswa',
      component:ViswaComponent
    }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
