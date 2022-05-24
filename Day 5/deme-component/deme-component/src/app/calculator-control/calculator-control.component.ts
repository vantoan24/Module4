import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'calculator-control',
  templateUrl: './calculator-control.component.html',
  styleUrls: ['./calculator-control.component.css']
})
export class CalculatorControlComponent implements OnInit {

  constructor() { }

  @Output()
  lamTinh = new EventEmitter<string>()


  ngOnInit(): void {
  }

  actionPlus(){
    console.log('nut + da dc nhan');
    this.lamTinh.emit('+');
  }
  actionPlus2(){
    console.log('nut - da dc nhan');
    this.lamTinh.emit('-');
  }
  actionPlus3(){
    console.log('nut * da dc nhan');
    this.lamTinh.emit('*');
  }
  actionPlus4(){
    console.log('nut / da dc nhan');
    this.lamTinh.emit('/');
  }

}
