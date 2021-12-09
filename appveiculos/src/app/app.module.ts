import { ApiveiculosService } from 'src/app/services/apiveiculos/apiveiculos.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import localept from '@angular/common/locales/pt';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CadveiculoComponent } from './components/cadveiculo/cadveiculo.component';
import { CadclienteComponent } from './components/cadcliente/cadcliente.component';
import { DetalhesveiculoComponent } from './components/detalhesveiculo/detalhesveiculo.component';
import { FormsModule } from '@angular/forms';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localept, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadveiculoComponent,
    CadclienteComponent,
    DetalhesveiculoComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
    ApiveiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
