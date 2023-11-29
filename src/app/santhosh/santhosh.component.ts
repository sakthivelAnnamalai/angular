import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
interface hero {
  id: number;
  name: string
}
interface heroine {
  id: number;
  name: string
}
@Component({
  selector: 'app-santhosh',
  templateUrl: './santhosh.component.html',
  styleUrls: ['./santhosh.component.scss']
})


export class SanthoshComponent implements OnInit {

  constructor(private fb: FormBuilder, private comfrimative: ConfirmationService, private messageservice: MessageService) { }
  form!: FormGroup;
  heroId: hero[] | undefined;
  heroineId: heroine[] | undefined;
  formpage: boolean = false;
  confirmdialodvisible: boolean = false
  value!: number;
  show: boolean = false
  movieslist: any = [{
    id: 1,
    mname: 'asuran',
    hname: 'dhanush'
  }]
  starsValue: number = 5;
  ngOnInit(): void {
    this.get()
  }

  get() {
    this.form = this.fb.group({
      mName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      heroId: [null, [Validators.required]],
      heroineId: [null, [Validators.required]],
      rDate: [null, Validators.required],
      collection: [null, [Validators.required, Validators.minLength(2), Validators.pattern('^[0-9]+$')]],
      rating: [null, Validators.required]
    })

  }

  //getallmovies
  getallmovie() {
    //api
  }
  //edit
  edit() {
    //api
    this.formpage = true
    this.show = true
  }
  //create button
  submit() {
    this.comfrimative.confirm({
      accept: () => {
        console.log("hi ama ");
        let data = this.form.value
        console.log(data);
        this.messageservice.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });

      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageservice.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageservice.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }
  cancel() {
    this.confirmdialodvisible = false

  }
  //update
  update() {
    this.confirmdialodvisible = true
    this.comfrimative.confirm({
      accept: () => {

        this.messageservice.add({ severity: 'success', summary: 'Confirmed', detail: 'updated' });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageservice.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageservice.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }
  //delete
  delete(id: any) {
    this.confirmdialodvisible = true
    this.comfrimative.confirm({
      accept: () => {
        this.messageservice.add({ severity: 'success', summary: 'Confirmed', detail: 'deleted' });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageservice.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageservice.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    })
  }


  get control() {
    return this.form.controls
  }
  deletefunction(cd: any) {
    setTimeout(() => {
      cd.accept()
    }, 2000)
  }

}
