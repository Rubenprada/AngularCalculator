import { CalculatorVistRoutingModule } from './calculator-vist-routing.module';
import { CalculatorVistComponent } from './calculator-vist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    CalculatorVistComponent
  ],
  imports: [
    CommonModule,
    CalculatorVistRoutingModule
    
  ],
  exports: [

  ]
})
export class CalculatorVistModule { }
