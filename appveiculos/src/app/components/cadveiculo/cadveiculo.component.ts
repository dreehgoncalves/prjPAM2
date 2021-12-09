import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiveiculosService } from 'src/app/services/apiveiculos/apiveiculos.service';

@Component({
  selector: 'app-cadveiculo',
  templateUrl: './cadveiculo.component.html',
  styleUrls: ['./cadveiculo.component.css']
})
export class CadveiculoComponent implements OnInit {
  marca: string = '';
  modelo: string = '';
  prop: string = '';
  pv: number = 0;
  mensagem: string = '';
  isErro: boolean = false;

  constructor(
    private servico: ApiveiculosService
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    const v = {
      marca: this.marca,
      modelo: this.modelo,
      proprietario: this.prop,
      preco_venda: this.pv
    };

    this.servico.cadastrar(v).subscribe(
      resposta => {
        this.isErro = false;
        console.log(resposta);
        this.mensagem = resposta.mensagem;
      },
      erro => {
        this.isErro = true;
        console.error(erro);
        if(erro.mensagem === undefined){
          this.mensagem = 'Não foi possível enviar os dados para a API';
        }else{
          this.mensagem = erro.mensagem;
        }
      }
    )
  }

  limpar(){
    this.mensagem = '';
  }
}
