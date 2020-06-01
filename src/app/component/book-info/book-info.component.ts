import { Book } from 'src/app/model/book';
import { BookService } from './../../service/book.service';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  book: Book
  sliceLength: number = 1000

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.bookService.obterLivroPorId(id).subscribe(book => {
      this.book = book
    })
  }

  changeSlice(): void {
    this.sliceLength == 1000 ?
      this.sliceLength = this.book.descricao.length :
      this.sliceLength = 1000
  }

}
