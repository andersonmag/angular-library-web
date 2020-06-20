import { CartService } from './../../service/cart.service';
import { Item } from './../../model/item';
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
  quantity: number = 1
  item: Item


  constructor(private bookService: BookService, private cartService: CartService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const link = params["link"]

      this.bookService.obterLivroPorLink(link).subscribe(book => {
        this.book = book
        this.bookService.obterLivrosPorCategoria(this.book.categoria.link).subscribe(books => {
          this.books = books['content']
          let index
          for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id == this.book.id)
              index = i
          }
          console.log(index)
          this.books.splice(index, 1)
        })
      }, (err) => {
        this.router.navigate(['/'])
      })
    })
    this.decrement()
  }

  changeSlice(): void {
    this.sliceLength == 1000 ?
      this.sliceLength = this.book.descricao.length :
      this.sliceLength = 1000
  }

  increment() {
    var quantity = document.getElementById("quantity");
    var dc = document.getElementById("decrement").style
    this.quantity < 10 ? this.quantity++ : ''

    if (this.quantity > 1) {
      dc.pointerEvents = 'all'
      dc.opacity = "inherit"
    }
  }

  decrement() {
    var quantity = document.getElementById("quantity");
    var dc = document.getElementById("decrement").style
    this.quantity > 1 ? this.quantity-- : ''

    if (this.quantity == 1) {
      dc.pointerEvents = 'none'
      dc.opacity = "0.5"
    }
  }

  addItemCart(book: Book) {
    this.item = new Item(book)
    this.item.quantidade = this.quantity

    this.cartService.adicionarCarrinho(this.item)
  }

}
