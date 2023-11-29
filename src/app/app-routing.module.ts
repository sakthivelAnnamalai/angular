import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { KirubaComponent } from './kiruba/kiruba.component';
import { ViswaComponent } from './viswa/viswa.component';
import { SanthoshComponent } from './santhosh/santhosh.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
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
      path:"kiruba",
      component:KirubaComponent
    },{
      path:'viswa',
      component:ViswaComponent
    },
      {
        path: 'santhosh',
        component: SanthoshComponent,

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
