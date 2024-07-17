import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]{3,50}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^(?!123)\\d{10}$')]],
      email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$')]],
      username: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9_]{5,20}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$')]]
    });
  }

  get formControls() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    alert('Registration successful!');
    console.log("registration data",this.registrationForm.value)
    // Handle form submission, e.g., send data to server
  }
}