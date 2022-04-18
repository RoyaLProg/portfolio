import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  message = '';
  newForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  ngOnInit(): void {
  }

  onSubmit() {
    this.message = 'Your form has been submitted!';
  }
}
