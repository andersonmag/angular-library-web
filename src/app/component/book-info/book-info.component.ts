import { Categoria } from './../../model/Categoria';
import { Book } from 'src/app/model/book';
import { BookService } from './../../service/book.service';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent implements OnInit {

  book: Book
  sliceLength: number = 1000
  loading: boolean = true
  books: Book[]

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const link = params["link"]

      this.bookService.obterLivroPorLink(link).subscribe(book => {
        this.book = book
        this.bookService.obterLivrosPorCategoria(book.categoria.id + '').subscribe(books => {
          var index = books.indexOf(book)
          books.splice(index, 1)
          this.books = books
        })
      })
    })

  }

  changeSlice(): void {
    this.sliceLength == 1000 ?
      this.sliceLength = this.book.descricao.length :
      this.sliceLength = 1000
  }

}
