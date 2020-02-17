import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public userCreateForm: FormGroup;
  hide = true;
  password = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]);
  confirmPassword = new FormControl('', CustomValidators.equalTo(this.password));
  constructor(
    private fb: FormBuilder,
    private userSerivce: UserService,
    private location: Location
  ) {

  }
  // checkPassword(group: FormGroup) {
  //   const pass = group.get('password').value;
  //   const confirmPass = group.get('confirmPassword').value;

  //   return pass === confirmPass ? null : { notSame: true };
  // }
  handleSummit() {
    console.log(this, 'form', this.userCreateForm);
    const data2Create = { ...this.userCreateForm.value };
    const fakeData = {
      confirmPassword: '123',
      email: '12321@gmail.com',
      firstName: '1221',
      lastName: '1212',
      password: '123',
      username: '2222'
    };
    // this.location.go('/user');
    this.userSerivce.createUser({ user: fakeData });
  }
  getErrorMessage() {

  }
  ngOnInit() {
    this.userCreateForm = this.fb.group({
      // floatLabel: 'auto',
      firstName: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      lastName: [
        null,
        Validators.compose([
          Validators.required,
        ])
      ],
      username: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      ],
      address: [
        null
      ],
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: [
        null,
        Validators.compose([
          CustomValidators.email
        ])
      ]
    });
  }

}
