import { Book } from 'src/app/model/book';
import { BookService } from './../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books: Book[]
  loading: boolean = true
  q: string
  MensagemResultado: string
  config = {
    itemsPerPage: 0,
    currentPage: 0,
    previousLabel: 'Anterior',
    nextLabel: 'Próximo',
    totalItems: 0
  }

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.buscarLivros()
  }

  buscarLivros() {
    this.activatedRoute.params.subscribe(params => {
      this.q = params.q
      this.bookService.pesquisarLivros(this.q).subscribe(books => {
        this.books = books['content']
        this.MensagemResultado = "Resultados para "
        this.config.totalItems = books['total_size']
        this.config.itemsPerPage = books['size']
      }, () => {
        this.books = []
        this.config.totalItems = 0
        this.MensagemResultado = "Nenhum resultado encontrado para "
      })
    })
  }

  onLoad() {
    this.loading = false;
  }

  alterarPaginacao(event) {
    this.config.currentPage = event;
    this.bookService.obterLivrosComPaginacao(this.config.currentPage - 1).subscribe(books => {
      this.books = books['content']
    })
  }

}
