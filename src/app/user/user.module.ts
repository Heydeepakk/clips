import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    AuthModalComponent
  ],
})
export class UserModule { }
