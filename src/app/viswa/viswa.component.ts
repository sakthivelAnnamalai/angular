import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viswa',
  templateUrl: './viswa.component.html',
  styleUrls: ['./viswa.component.scss']
})
export class ViswaComponent implements OnInit {
  formpage:boolean=false

  form! : FormGroup
  heroId:hero[]|undefined
  heroineId:heroine[]|undefined
  
  constructor(private fb:FormBuilder){}


  ngOnInit(): void {
    this.getall()
  }

  getall(){
    this.form = this.fb.group({
      mName:['',[Validators.required]],
      heroId:['',[Validators.required]],
      heroineId:['',[Validators.required]],
      rDate:['',[Validators.required]],
      collection:['',[Validators.required,Validators.minLength(2),Validators.pattern('^[0-9]+$')]],
      rating:['',[Validators.required]]
    })
  }

 get formcontrol(){
  return this.form.controls
 }

 create(){
  this.formpage=true
 }

 cancel(){

 }

 submit(){

 }

 update(){

 }
}

interface hero{
  id: number,
  name: string
}

interface heroine{
  id:number,
  name: string
}