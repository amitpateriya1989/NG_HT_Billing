import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router:Router,
    

  ) { }

  ngOnInit() {
  }
show(){
  //this.router.navigate(["test"],{relativeTo:this.route});
}
}
