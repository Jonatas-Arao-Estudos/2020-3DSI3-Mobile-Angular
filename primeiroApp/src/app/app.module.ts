import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ContarModule } from './contar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
