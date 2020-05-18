import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomarComponent } from './component/somar';



@NgModule({
  declarations: [SomarComponent],
  imports: [
    CommonModule
  ], exports: [
    SomarComponent
  ]
})
export class ContarModule { }
