import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorControlComponent } from './calculator-control/calculator-control.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorResultComponent,
    CalculatorInputComponent,
    CalculatorControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
