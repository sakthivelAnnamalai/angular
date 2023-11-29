import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UtilityserviceService } from '../core/utility/utilityservice.service';

@Component({
  selector: 'app-kiruba',
  templateUrl: './kiruba.component.html',
  styleUrls: ['./kiruba.component.scss']
})
export class KirubaComponent implements OnInit{

  form!:FormGroup;
  movieList!:any
  formpage:boolean=false;
  starsValue: number = 5; 
  confirmdialodvisible:boolean=false;
  submitButton:boolean=false;

  constructor(private fb:FormBuilder,private confirmationService:ConfirmationService,private messageService:MessageService,private  utility:UtilityserviceService){}

  ngOnInit(): void {
    this.intis()
  }

  intis(){
    this.form=this.fb.group({
      mName:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      heroId:[null,[Validators.required]],
      heroineId:[null,[Validators.required]],
      rDate:[null,Validators.required],
      collection:[null,[Validators.required,Validators.minLength(2),Validators.pattern('^[0-9]+$')]],
      rating:[null,Validators.required]
    })
  }

  get formControl(){
    return this.form.controls
  }

  cancel(){
    this.form.reset()
    this.formpage=false
  }

  deletefunction(cd: any) {
    setTimeout(() => {
      cd.accept()
    }, 500)
  }

  create(){
    if(this.form.invalid){
      return this.form.markAllAsTouched()
    }
    this.confirmdialodvisible=true
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Create?',
      header: 'Creatinn new data',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          let data=this.form.value;
          console.log('create',data)
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (error:any) => {
         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You cancel it' });
      }
  });
}

  update(){
    if(this.form.invalid){
      return this.form.markAllAsTouched()
    }
    this.confirmdialodvisible=true
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Update?',
      header: 'updating data',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          let data=this.form.value;
          console.log('updated',data)
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (error:any) => {
         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You cancel it' });
      }
  });
  }
  
  getbyid(id:number){
    this.submitButton=true
    this.formpage=true;


  }

  deleteByid(id:number){
    this.confirmdialodvisible=true
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Deleting the data',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          console.log(id)
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (error:any) => {
         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You cancel it' });
      }
  });
  }


}
