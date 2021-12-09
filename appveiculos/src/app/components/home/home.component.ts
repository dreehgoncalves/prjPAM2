import { ApiveiculosService } from 'src/app/services/apiveiculos/apiveiculos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carros: any[] = []

  constructor(
    private api: ApiveiculosService,
    private roteador: Router
  ) { }

  ngOnInit(): void {
    this.carregarDados()
  }

  carregarDados(){
    this.api.buscarTodos().subscribe(
      (dados) => {
        console.log(dados)
        this.carros = dados.data
      },
      (erro) => {
        console.error(erro)
      }
    )
  }

  abrirDetalhes(veiculo: any){
    this.api.setVeiculo(veiculo);
    this.roteador.navigateByUrl('/detv');
  }

}
