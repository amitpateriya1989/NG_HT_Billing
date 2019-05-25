import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegistrationdComponent } from './registration/registrationd.component';
import {MatNativeDateModule,MatIconModule,MatButtonModule, MatTableModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
  MatRadioModule,MatListModule,MatSelectModule} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostloginModule } from '../postlogin/postlogin.module';
@NgModule({
  declarations: [
    LoginComponent, 
    ForgetPasswordComponent, 
    RegistrationdComponent,
    ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    PostloginModule
  ],
  exports:[LoginComponent
  ]
})
export class PreloginModule { }
