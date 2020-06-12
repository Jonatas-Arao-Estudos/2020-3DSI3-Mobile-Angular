/// <reference types="@types/materialize-css"/>
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('menu', { static: false }) public menu: ElementRef;

  objTabs: M.Tabs;

  ngAfterViewInit() {
  this.objTabs = new M.Tabs(this.menu.nativeElement, {});
  }
}
