import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomarService {
  private valorInicial: number;
  constructor() { }
  somar(valorInicial: number, valorSoma : number) : number {
    return valorInicial + valorSoma;
  }
}
