import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deme-component';

  calculatorDatas = {
    inputs: {
      input1: 0,
      input2: 0
    },
    output: 0
  }

  updateInputs(e: {input1: number, input2: number}) {
    console.log('du lieu da bi thay doi', e.input1, e.input2);
    this.calculatorDatas.inputs.input1 = e.input1;
    this.calculatorDatas.inputs.input2 = e.input2;
  }

  calculator(e: string) {
    if (e === '+') {
      this.calculatorDatas.output = this.calculatorDatas.inputs.input1 + this.calculatorDatas.inputs.input2;
    }
  }

  calculator2(e: string) {
    if (e === '-') {
      this.calculatorDatas.output = this.calculatorDatas.inputs.input1 - this.calculatorDatas.inputs.input2;
    }
  }

  calculator3(e: string) {
    if (e === '*') {
      this.calculatorDatas.output = this.calculatorDatas.inputs.input1 * this.calculatorDatas.inputs.input2;
    }
  }

  calculator4(e: string) {
    if (e === '/') {
      this.calculatorDatas.output = this.calculatorDatas.inputs.input1 / this.calculatorDatas.inputs.input2;
    }
  }
}
