import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcularMedia';

  codigoRMA: number = 222226;
  nome: string = "Naruto Uzumaki";
  nota: number[] = [4, 3, 2, 7];
  media: number;
  imagem1: string = '../assets/naruto.png';

  codigoRMA2: number = 222226;
  nome2: string = "Sakura Harumo";
  nota2: number[] = [8, 7, 8, 9];
  media2: number;
  imagem2: string = '../assets/Sakura.webp'

  codigoRMA3: number = 222226;
  nome3: string = "Sasuke Uchiha";
  nota3: number[] = [10, 10, 9, 9.8];
  media3: number;
  imagem3: string = '../assets/Sasuke.webp'





  constructor() {
    let soma = 0;
    for(let c = 0; c < this.nota.length; c++) {
      soma += this.nota[c];
    }
    this.media = soma / this.nota.length;

    let soma2 = 0;
    for(let c = 0; c < this.nota2.length; c++) {
      soma2 += this.nota2[c];
    }
    this.media2 = soma2 / this.nota2.length;

    let soma3 = 0;
    for(let c = 0; c < this.nota3.length; c++) {
      soma3 += this.nota2[c];
    }
    this.media3 = soma3 / this.nota3.length;
  }
}

