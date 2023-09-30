import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  // objeto de rotas
  // 1º - zerar rotas
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  // 2 - Criar a rota de home
  { path: 'home', component: HomeComponent}
];

// Principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
