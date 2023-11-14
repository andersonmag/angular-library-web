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
  recomendados: Book[]
  loading: boolean = true
  quantidadeItensCarrinho: number = 0
  totalItensCarrinho: number = 0
  sliceValor: number = 1000
  quantidade: number = 1
  midias = Midia
  midiaSelecionada: Midia = Midia.DIGITAL

  constructor(private bookService: BookService, private carrinhoService: CartService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.listarLivros()
  }

  listarLivros() {
    this.activatedRoute.params.subscribe(params => {
      const link = params.link
      this.bookService.obterLivroPorLink(link).subscribe(book => {
        this.book = book
        this.bookService.obterLivrosPorCategoria(this.book.categoria.link).subscribe(
          books => {
            this.recomendados = books['content']

            let index = this.recomendados.findIndex(recomendado => recomendado.id == this.book.id)
            this.recomendados.splice(index, 1)
          })
      }, (err) => {
        this.router.navigate(['/'])
      })
    })

    this.decrementQuantidade()
    this.detalhesCarrinho()
  }

  detalhesCarrinho() {
    this.carrinhoService.totalPreco.subscribe(
      total => this.totalItensCarrinho = total
    )
    this.carrinhoService.totalQtdd.subscribe(
      qtdd => this.quantidadeItensCarrinho = qtdd
    )
  }

  alterarValorSlice() {
    this.sliceValor == 1000 ?
      this.sliceValor = this.book.descricao.length :
      this.sliceValor = 1000
  }

  incrementQuantidade() {
    var btnAtualizaQuantidade = document.getElementById("atualizaQuantidade").style
    this.quantidade < 10 ? this.quantidade++ : ''

    if (this.quantidade > 1) {
      btnAtualizaQuantidade.pointerEvents = 'all'
      btnAtualizaQuantidade.opacity = "inherit"
    }
  }

  decrementQuantidade() {
    var btnAtualizaQuantidade = document.getElementById("atualizaQuantidade").style
    this.quantidade > 1 ? this.quantidade-- : ''

    if (this.quantidade == 1) {
      btnAtualizaQuantidade.pointerEvents = 'none'
      btnAtualizaQuantidade.opacity = "0.5"
    }
  }

  adicionarItemCarrinho(book: Book) {
    var item = new Item(book, this.quantidade, this.midiaSelecionada)
    this.carrinhoService.adicionarItemCarrinho(item)
  }
}
