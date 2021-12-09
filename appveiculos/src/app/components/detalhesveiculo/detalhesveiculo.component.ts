import { ApiveiculosService } from 'src/app/services/apiveiculos/apiveiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhesveiculo',
  templateUrl: './detalhesveiculo.component.html',
  styleUrls: ['./detalhesveiculo.component.css']
})
export class DetalhesveiculoComponent implements OnInit {
  carro: any

  constructor(
    private api: ApiveiculosService
  ) { }

  ngOnInit(): void {
    this.carregarVeiculo()
  }

  carregarVeiculo(){
    this.carro = this.api.getVeiculo();
  }
}
