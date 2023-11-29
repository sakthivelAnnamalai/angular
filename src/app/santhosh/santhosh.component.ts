import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) { }
  form!: FormGroup;
  heroId: hero[] | undefined;
  heroineId: heroine[] | undefined;
  formpage: boolean = false;
  value!: number;
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
  cancel() {

  }
  submit() {

  }
  update() {

  }
  get control() {
    return this.form.controls
  }


}
