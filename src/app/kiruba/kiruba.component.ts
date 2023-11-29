import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kiruba',
  templateUrl: './kiruba.component.html',
  styleUrls: ['./kiruba.component.scss']
})
export class KirubaComponent implements OnInit{

  form!:FormGroup;

  formpage:boolean=false;
  starsValue: number = 5; 

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.getall()
  }

  getall(){
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
  }

  create(){

  }

  update(){

  }
}
