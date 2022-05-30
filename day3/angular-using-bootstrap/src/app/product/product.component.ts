import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private _result =0;
  private _number1:any
  private _number2:any

  get result(): number {
    return this._result;
  }

  set result(value: number) {
    this._result = value;
  }


  get number1(): any {
    return this._number1;
  }

  setNumber1(value: any) {
    this._number1 = Number(value.target.value);
  }


  get number2(): any {
    return this._number2;
  }

  setNumber2(value: any) {
    this._number2 = Number(value.target.value);
  }

  tinhCong(){
    this._result = this._number1 + this.number2;
  }
  tinhTru(){
    this._result = this._number1 - this.number2;
  }
  tinhNhan(){
    this._result = this._number1 * this.number2;
  }
  tinhChia(){
    this._result = this._number1 / this.number2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
