import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './prelogin/login/login.component';
import { DashboardComponent } from './postlogin/dashboard/dashboard.component';



const routes: Routes = [
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent,pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
