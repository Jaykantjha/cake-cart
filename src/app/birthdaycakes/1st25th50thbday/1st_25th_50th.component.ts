import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './1st_25th_50th.component.html',
  styleUrls: ['./1st_25th_50th.component.css']
})

export class Birthday1st25th50thComponent implements OnInit {
  data: any[];

  constructor() {}


  ngOnInit() {}

  AddtoCart(data) {
    console.log(data);
  }

}
