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

  constructor(private bookService: BookService, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {

      this.bookService.obterTodosOsLivros().subscribe(books => {
        this.books = books
      })
  }

}
