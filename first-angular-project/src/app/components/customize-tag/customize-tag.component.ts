import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'customize-tag',
  templateUrl: './customize-tag.component.html',
  styleUrls: ['./customize-tag.component.css']
})
export class CustomizeTagComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
    for(let i = 0 ; i < 10 ; i++){
         console.log(i);
    }
  }
  name:string;
  calculate(){
    console.log("this is not working");
    this.name = "shaikot";
  }

}
