import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-property',
  templateUrl: './b-property.component.html',
  styleUrls: ['./b-property.component.css']
})
export class BPropertyComponent implements OnInit {
  itemImageUrl:string ='http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  colspan:number = 5;
  isUnchanged:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
