import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  
  constructor(private fb:FormBuilder) { }
  employeeNameLength = 0;
  validationMessages = {
    'employeeName' : {
      'required': "Employee name is required",
      'minLength' : "Ëmployee name must be greater than 2 chars",
      'maLength' : "Employee name must be smaller than 20 chars"

    },
    'email': {
      'required': "Email is required"
    }
  }
  ngOnInit() {
    // this.employeeForm = new FormGroup({
    //   employeeName: new FormControl(''),
    //   email: new FormControl('')

      this.employeeForm = this.fb.group({
        employeeName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
        email: ['']
      })

      this.employeeForm.valueChanges.subscribe((value:any )=> {
        //this.employeeNameLength =value.length;
        console.log(JSON.stringify(value));
      })
  }
  onSubmit() : void {

    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.valid);
    console.log(this.employeeForm.pristine);
  }

  logKeyValuePair(group:FormGroup):void{

  Object.keys(group.controls).forEach((key:string)=>{
    const abstractControl = group.get(key);
    if (abstractControl instanceof FormGroup){
      this.logKeyValuePair(abstractControl);
    } else {
      console.log("Key is: "+ key + "value is: "+ abstractControl.value);
    }
  });
  }

  onLoadData(): void{
    this.logKeyValuePair(this.employeeForm);
    // this.employeeForm.patchValue({
    //   employeeName:"Swetha",
    //   email:"sg@gmail.com"

    
  }
}
