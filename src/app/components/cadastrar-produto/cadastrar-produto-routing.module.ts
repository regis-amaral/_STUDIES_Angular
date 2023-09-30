import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CadastrarProdutoRoutingModule { }
