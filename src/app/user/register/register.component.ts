import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from '../validators/register-validators';
import { EmailTaken } from '../validators/email-taken';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private auth : AuthService,
    private emailTaken: EmailTaken
  ) { }
  inSubmission = false

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ],[this.emailTaken.validate])

  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(60),
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password = new FormControl('', [
    Validators.required,
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10)
  ])
  showAlert = false
  alertMsg = 'Please wait! Your account is created'
  alertColor = 'blue'

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  }, [RegisterValidators.match('password', 'confirm_password')])
  async register() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is created'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {     
     await this.auth.creatUser(this.registerForm.value as IUser)
    } catch (e) {
      this.alertMsg = 'please try again '
      this.alertColor = 'red'
      this.inSubmission = false

      return

    }

    this.alertMsg = 'Success! Your account created '
    this.alertColor = 'green'
  }


}