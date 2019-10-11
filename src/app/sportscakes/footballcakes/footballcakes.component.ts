import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  templateUrl: './footballcakes.component.html',
  styleUrls: ['./footballcakes.component.css']
})

export class FootballcakesComponent  implements OnInit{

  constructor(private router: Router){

  }
  ngOnInit(){
      console.log(this.router.url);
  }
}
