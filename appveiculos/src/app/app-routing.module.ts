import { DetalhesveiculoComponent } from './components/detalhesveiculo/detalhesveiculo.component';
import { HomeComponent } from './components/home/home.component';
import { CadveiculoComponent } from './components/cadveiculo/cadveiculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadv', component: CadveiculoComponent },
  { path: 'detv', component: DetalhesveiculoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
