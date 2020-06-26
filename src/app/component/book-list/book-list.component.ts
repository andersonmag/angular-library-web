import { ActivatedRoute } from '@angular/router';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[]
  loading: boolean = true
  config = {
    itemsPerPage: 0,
    currentPage: 0,
    previousLabel: '',
    nextLabel: '',
    totalItems: 0
  }

  constructor(private bookService: BookService, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.adquirirLivros()
  }

  adquirirLivros() {
    this.bookService.obterTodosOsLivros().subscribe(books => {
      this.books = books['content']
      this.config.totalItems = books['total_size']
      this.config.itemsPerPage = books['size']
    })
  }

  onLoad() {
    this.loading = false;
  }

  alterarPaginacao(event) {
    this.config.currentPage = event;
    this.bookService.obterLivrosComPaginacao(this.config.currentPage - 1).subscribe(
      books => this.books = books['content']
    )
  }

}
