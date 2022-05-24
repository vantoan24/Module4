import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.css']
})
export class CalculatorInputComponent implements OnInit {
  constructor() { }

  calculatorInputs = {
    number1: 0,
    number2: 0
  }

  @Output()
  duLieuBiThayDoi = new EventEmitter<{input1: number, input2: number}>();

  ngOnInit(): void {
  }

  emitInputChanges() {
    this.duLieuBiThayDoi.emit({input1: this.calculatorInputs.number1, input2: this.calculatorInputs.number2});
  }
}
