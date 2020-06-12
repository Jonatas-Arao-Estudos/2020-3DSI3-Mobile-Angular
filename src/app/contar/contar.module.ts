import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomarComponent } from './component/somar';
import { SomarService } from './services';



@NgModule({
  declarations: [SomarComponent],
  imports: [
    CommonModule
  ], exports: [
    SomarComponent
  ],
  providers: [
    SomarService
  ]
})
export class ContarModule { }
