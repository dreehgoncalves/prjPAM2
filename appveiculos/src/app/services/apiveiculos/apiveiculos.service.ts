import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiveiculosService {
  readonly URL = 'http://localhost:3000';
  veiculo: any;

  constructor(
    private http: HttpClient
  ) { }

  setVeiculo(veiculo: any){
    this.veiculo = veiculo;
  }

  getVeiculo(): any{
    return this.veiculo;
  }

  cadastrar(veiculo: any): Observable<any>{
    return this.http.post<any>(this.URL + '/cadveiculo', veiculo).pipe(
      map(retorno => retorno),
      catchError(erro => throwError(erro.error))
    )
  }

  buscarTodos(): Observable<any>{
    return this.http.get<any>(`${this.URL}/veiculos`).pipe(
      map(retorno => retorno),
      catchError(erro => throwError(erro.error))
    )
  }
}
