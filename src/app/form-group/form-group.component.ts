import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),

  });
  constructor() { }

  ngOnInit() {
  }
onSubmit(){
 
  console.log(this.profileForm.value);

  alert(this.profileForm.get('firstName').value);
  alert(this.profileForm.valid);
}
}
