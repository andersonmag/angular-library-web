import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[]

  constructor() { }

  ngOnInit(): void {

    this.books = [
      {
        id: 1, nome: "A Doutrina Secreta - (Vol. V)", autor: "H.P.Blavatsky", 
        descricao: 
        "Primeira edição completa, em português, da monumental obra de H.P.Blavatsky, cuja edição original em inglês foilançada simultaneamente em Londres e Nova Iorque no ano de 1888",
        DataPublicacao:  new Date("31/10/1980"), preco: 29.0, ImagemUrl: "https://images-americanas.b2w.io/produtos/imagens/5326946/5326947_1GG.jpg"
      },
      {
        id: 2, nome: "A Doutrina Secreta - (Vol. V)", autor: "H.P.Blavatsky", 
        descricao: 
        "Primeira edição completa, em português, da monumental obra de H.P.Blavatsky, cuja edição original em inglês foilançada simultaneamente em Londres e Nova Iorque no ano de 1888",
        DataPublicacao:  new Date("31/10/1980"), preco: 29.0, ImagemUrl: "https://images-americanas.b2w.io/produtos/imagens/5326946/5326947_1GG.jpg"
      },
      {
        id: 3, nome: "A Doutrina Secreta - (Vol. V)", autor: "H.P.Blavatsky", 
        descricao: 
        "Primeira edição completa, em português, da monumental obra de H.P.Blavatsky, cuja edição original em inglês foilançada simultaneamente em Londres e Nova Iorque no ano de 1888",
        DataPublicacao:  new Date("31/10/1980"), preco: 29.0, ImagemUrl: "https://images-americanas.b2w.io/produtos/imagens/5326946/5326947_1GG.jpg"
      },
      {
        id: 4, nome: "A Doutrina Secreta - (Vol. V)", autor: "H.P.Blavatsky", 
        descricao: 
        "Primeira edição completa, em português, da monumental obra de H.P.Blavatsky, cuja edição original em inglês foilançada simultaneamente em Londres e Nova Iorque no ano de 1888",
        DataPublicacao:  new Date("31/10/1980"), preco: 29.0, ImagemUrl: "https://images-americanas.b2w.io/produtos/imagens/5326946/5326947_1GG.jpg"
      }
    
    ]
  }

}
