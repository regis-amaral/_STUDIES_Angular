import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';


// Modulo importar bibliotecas dentro do módulo
// e essas bibliotecas serão utilizadas pelos componentes

// Meu módulo pode ter vários componentes
// mas aqui camos trabalhar com ideia de somente um
@NgModule({
  // Modulo declara componentes ao quais estão no escopo
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  // Exportar o componente para ser visto por outros componentes
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
