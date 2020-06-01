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

  constructor(private bookService: BookService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.bookService.obterLivroPorCategoria(id).subscribe(books => {
        this.books = books;
      });
    });
  }

}
