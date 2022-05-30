import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name:any ='văn toàn';
  public age:any;
  public arrays:any=['a','b','c','d','e','f','g','h','i'] ;

  constructor(private common:CommonService) {
    this.age = common.age;
  }

  ngOnInit(): void {
  }
  tangtuoi(){
    this.common.age++
    this.age =this.common.age;
  }
  trutuoi(){
    this.age--;
  }
}
