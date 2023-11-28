import { Component } from '@angular/core';
import { ApiList } from '../core/variable/apiList';
import { ApiService } from '../services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilityserviceService } from '../core/utility/utilityservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(  private apiService: ApiService,private  utility:UtilityserviceService){

  }

  ngOnInit(){

  }

  check(){
    this.apiService.Get(ApiList.checkingProject).subscribe({
      next: (res: any) => {
        console.log("responesssssssssssssssssss",res)
         this.utility.successToast(res.message) 
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);

      }
    })
    

  }

}
