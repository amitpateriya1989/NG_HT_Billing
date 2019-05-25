import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,FooterComponent,NavbarComponent
  ]
})
export class LayoutModule { }
