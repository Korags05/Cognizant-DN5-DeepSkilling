import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    age: new FormControl(18, [Validators.required, Validators.min(18)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  submit() {

    if(this.studentForm.valid){

      alert(

        JSON.stringify(

          this.studentForm.value,

          null,

          2

        )

      );

    }

  }
}
