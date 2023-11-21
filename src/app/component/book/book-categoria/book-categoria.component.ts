import { Categoria } from '../../../model/Categoria';
import { Book } from 'src/app/model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { PageConfigBooks } from 'src/app/model/PageConfigBooks';
import { PaginatePipeArgs } from 'ngx-pagination/dist/paginate.pipe';

@Component({
  selector: 'app-book-categoria',
  templateUrl: './book-categoria.component.html',
  styleUrls: ['./book-categoria.component.css']
})
export class BookCategoriaComponent implements OnInit {

  books: Book[] = []
  categoria: Categoria = new Categoria()
  loading: boolean = true
  config = {
    itemsPerPage: 0,
    currentPage: 0,
    previousLabel: 'Anterior',
    nextLabel: 'Próximo',
    totalItems: 0
  }

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarLivros()
  }

  listarLivros() {
    this.activatedRoute.params.subscribe(params => {
      const link = params.link
      this.bookService.obterLivrosPorCategoria(link).subscribe(books => {
        this.books = books['content']
        this.categoria = this.books[0].categoria
        console.log(this.categoria)
      })
    });
  }

}
