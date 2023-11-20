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
  loading: boolean = false
  currentPage: number = 0
  existeMaisLivrosPaginacao: boolean = false

  constructor(private bookService: BookService, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarLivros()
  }

  listarLivros() {
    this.bookService.obterTodosOsLivros().subscribe(books => {
      this.books = books['content']
    }, () => console.log("error"),
       () => {
         this.ordenarPorTitulo()
         this.existeMaisLivrosPaginacao = true;
       })
  }

  onLoad() {
    this.loading = false;
  }

  ordenarPorTitulo() {
    this.books.sort((book,proximoBook) => book.titulo.localeCompare(proximoBook.titulo))
  }

  alterarPaginacao() {
    this.bookService.obterLivrosComPaginacao(++this.currentPage).subscribe(
      books => {
        if(!books.length) this.existeMaisLivrosPaginacao = false 
        this.books = this.books.concat(books['content'])
      }, () => console.log("error"), 
         () => this.ordenarPorTitulo() 
    )
  }

}
