import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})

export class TenniscakesComponent implements OnInit{

  constructor(private router: Router){

  }
  ngOnInit(){
      console.log(this.router.url);
  }

}
