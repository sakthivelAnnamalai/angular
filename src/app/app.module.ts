import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ViswaComponent } from './viswa/viswa.component';
=======
import { SanthoshComponent } from './santhosh/santhosh.component';
>>>>>>> 94672d3e6a1eabbe6204ec34883efd25e50d4b43


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
<<<<<<< HEAD
    ViswaComponent
=======
    SanthoshComponent
>>>>>>> 94672d3e6a1eabbe6204ec34883efd25e50d4b43
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
