import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './prelogin/login/login.component';
import { PreloginModule } from './prelogin/prelogin.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LayoutModule } from './layout/layout.module';
import {MatNativeDateModule,MatIconModule,MatButtonModule, MatTableModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
  MatRadioModule,MatListModule,MatSelectModule, MatDatepickerModule} from  '@angular/material';
import { PostloginModule } from './postlogin/postlogin.module';




@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    PreloginModule,
    LayoutModule,
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
    PostloginModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
