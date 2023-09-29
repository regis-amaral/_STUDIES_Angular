import { Component, OnInit } from '@angular/core';
import { argv } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularProject';

  private variavelPrivada: string;

  public titulo: string = 'olá pessoas';

  // caso o atributo for privado o html nao consegue acessar

  //ao carregar a tela
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    console.log("calculo da média: ", this.calculadora(2,4,6))
    console.log(this.verificaString("devs2blu"))
    console.log("juros simples: ", this.calculaJurosSimples(500, 0.05, 5))
    console.log(this.contaVogaisConsoantes("Internacional Sport Clube"))
  }

  aoClicar(): void {
    const variavelFixa: string = 'texto';

    let variavelAlteravel: string;
    variavelAlteravel = 'texto';

    alert(this.converterDado('VAOBOOORA'));
  }

  converterDado(dado: string): string {
    return dado;
  }

  calculadora(num1: number, num2: number, num3: number): number {
    return (num1 + num2 + num3) / 3;
  }

  verificaString(text: string): void {
    console.log(`A string tem ${text.length} caracteres`);
    console.log(`É igual a  “devs2blu”? ${text === 'devs2blu' ? 'Sim' : 'Não'}`);
  }

  calculaJurosSimples(principal: number, taxaDeJuros: number, meses: number) {
    let montante = principal * Math.pow((1 + taxaDeJuros), meses);
    let juros = principal - montante;
    return juros;
  }

  contaVogaisConsoantes(frase: string): string {

    let vogais: number = 0

    let consoantes: number = 0

    frase = frase.toLowerCase();

    for (let i = 0; i < frase.length; i++) {
      
      let char = frase[i]

      if (/[aeiou]/.test(char)) {
        vogais++;
      } else if (/[a-z]/.test(char)) {
        consoantes++;
      }
    }

    return `Qtd de vogais: ${vogais} \nQtd de consoantes: ${consoantes}`;
  }
}
