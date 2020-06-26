import { Midia } from './../../model/midia';
import { CartService } from './../../service/cart.service';
import { Item } from './../../model/item';
import { Book } from 'src/app/model/book';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent implements OnInit {

  book: Book
  books: Book[]
  loading: boolean = true
  carrinhoQuantidade: number = 0
  totalPreco: number = 0
  sliceValor: number = 1000
  quantidade: number = 1
  midias = Midia
  midiaSelecionada: Midia = Midia.DIGITAL

  constructor(private bookService: BookService, private cartService: CartService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.adquirirLivros()
  }

  adquirirLivros() {
    this.activatedRoute.params.subscribe(params => {
      const link = params.link

      this.bookService.obterLivroPorLink(link).subscribe(book => {
        this.book = book
        this.bookService.obterLivrosPorCategoria(this.book.categoria.link).subscribe(
          books => {
            this.books = books['content']

            let index = this.books.findIndex(bookIt => bookIt.id == this.book.id)
            this.books.splice(index, 1)
            console.log(index)
          })
      }, (err) => {
        this.router.navigate(['/'])
      })
    })

    this.decrement()
    this.detalhesCarrinho()
  }

  detalhesCarrinho() {
    this.cartService.totalPreco.subscribe(
      total => this.totalPreco = total
    )
    this.cartService.totalQtdd.subscribe(
      qtdd => this.carrinhoQuantidade = qtdd
    )
  }

  alterarValorSlice() {
    this.sliceValor == 1000 ?
      this.sliceValor = this.book.descricao.length :
      this.sliceValor = 1000
  }

  increment() {
    var dc = document.getElementById("decrement").style
    this.quantidade < 10 ? this.quantidade++ : ''

    if (this.quantidade > 1) {
      dc.pointerEvents = 'all'
      dc.opacity = "inherit"
    }
  }

  decrement() {
    var dc = document.getElementById("decrement").style
    this.quantidade > 1 ? this.quantidade-- : ''

    if (this.quantidade == 1) {
      dc.pointerEvents = 'none'
      dc.opacity = "0.5"
    }
  }

  adicionarItemAoCarrinho(book: Book) {
    var item = new Item(book, this.quantidade, this.midiaSelecionada)
    this.cartService.adicionarCarrinho(item)
  }
}
