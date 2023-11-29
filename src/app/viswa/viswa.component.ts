import { ConfirmationService, MessageService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-viswa',
  templateUrl: './viswa.component.html',
  styleUrls: ['./viswa.component.scss']
})
export class ViswaComponent implements OnInit {
  formpage: boolean = false

  form!: FormGroup
  heroId: hero[] | undefined
  heroineId: heroine[] | undefined
  confirmdialodvisible: boolean = false
  movieslist: any


  constructor(private fb: FormBuilder, private ConfirmationService: ConfirmationService, private MessageService: MessageService) { }


  ngOnInit(): void {
    this.getall()
  }

  getall() {
    this.form = this.fb.group({
      mName: ['', [Validators.required]],
      heroId: ['', [Validators.required]],
      heroineId: ['', [Validators.required]],
      rDate: ['', [Validators.required]],
      collection: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[0-9]+$')]],
      rating: ['', [Validators.required]]
    })
  }

  get formcontrol() {
    return this.form.controls
  }

  create() {
    this.formpage = true
  }

  cancel() {
    this.confirmdialodvisible = false

  }

  submit() {
    if (this.form.invalid) {
      // return this.form.markAllAsTouched()
    }
    this.confirmdialodvisible = true
    this.ConfirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log(this.form.value)

        this.MessageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },

      reject: (error: any) => {
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: 'an error occurred. Please try again' })
      }
    })

  }

   update(){
    this.confirmdialodvisible=true
    this.ConfirmationService.confirm({
      accept: () => {
        let datas =this.form.value
        console.log(this.update,'++',datas)

        this.MessageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },

      reject: (error: any) => {
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: 'an error occurred. Please try again' })
      }
    })

  }

  edit(id: number){
    this.confirmdialodvisible = true
  
  }
  
  deletefunction(cd: any) {
    setTimeout(() => {
      cd.accept()
    }, 500)
  }
}




interface hero {
  id: number,
  name: string
}

interface heroine {
  id: number,
  name: string
}