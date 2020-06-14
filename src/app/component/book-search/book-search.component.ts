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
  result: string
  config = {
    itemsPerPage: 0,
    currentPage: 0,
    previousLabel: '',
    nextLabel: '',
    totalItems: 0
  }

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.q = params.q
      this.bookService.pesquisarLivros(this.q).subscribe(books => {
        this.books = books['content']
        this.result = "Resultados para "
        this.config.totalItems = books['total_size']
        this.config.itemsPerPage = books['size']
      }, (err) => {
        this.books = []
        this.config.totalItems = 0
        this.result = "Nenhum resultado encontrado para "
      })
    })
  }

  onLoad() {
    this.loading = false;
  }


  onPageChange(event) {

    this.config.currentPage = event;
    this.bookService.obterLivrosComPaginacao(this.config.currentPage - 1).subscribe(books => {
      this.books = books['content']
    })
  }

}
