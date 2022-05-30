import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 10;
  public arrays:any=['a','b','c','d','e','f','g','h','i'] ;

  constructor() { }
  public tangtuoi(){
    this.age++;
  }
}
