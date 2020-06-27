import { Categoria } from './../../model/Categoria';
import { Book } from 'src/app/model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-categoria',
  templateUrl: './book-categoria.component.html',
  styleUrls: ['./book-categoria.component.css']
})
export class BookCategoriaComponent implements OnInit {

  books: Book[]
  categoria: Categoria
  loading: boolean = true
  config = {
    itemsPerPage: 0,
    currentPage: 0,
    previousLabel: '',
    nextLabel: '',
    totalItems: 0
  }

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.adquirirLivros()
  }

  adquirirLivros() {
    this.activatedRoute.params.subscribe(params => {
      const link = params.link
      this.bookService.obterLivrosPorCategoria(link).subscribe(books => {
        this.books = books['content']
        this.categoria = books['content'][0]['categoria']
      })
    });
  }

}
