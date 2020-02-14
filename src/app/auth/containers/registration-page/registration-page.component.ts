import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  public profileForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{0,3}')])]
    });
  }

  resetForm() {
    this.profileForm.get("firstName").setValue('');
    this.profileForm.get("firstName").updateValueAndValidity();

    this.profileForm.get("lastName").setValue('');
    this.profileForm.get("lastName").updateValueAndValidity();

    this.profileForm.get("age").setValue('');
    this.profileForm.get("age").updateValueAndValidity();
  }

  onSubmit() {
    this.profileForm.get("firstName").setValidators(Validators.required);
    this.profileForm.get("firstName").updateValueAndValidity();

    this.profileForm.get("lastName").setValidators(Validators.required);
    this.profileForm.get("lastName").updateValueAndValidity();

    this.profileForm.get("age").setValidators(Validators.required);
    this.profileForm.get("age").updateValueAndValidity();

    console.log(this.profileForm.value);
  }
}
