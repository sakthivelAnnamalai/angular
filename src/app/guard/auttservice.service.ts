import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuttserviceService {

  constructor() { }


  isLoggedIn(){
    if(localStorage.getItem('authToken')) return true;
    return false;
  }
}
