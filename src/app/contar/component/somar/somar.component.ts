import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../services';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  private valorCampo : number;

  constructor(private somar: SomarService) { }

  ngOnInit(): void {
    this.valorCampo = 0;
  }

  calcula(valorInserido : number) {
    this.valorCampo = this.somar.somar(this.valorCampo, valorInserido);
  }

  get pegaValor(){
    return this.valorCampo;
  }
}
