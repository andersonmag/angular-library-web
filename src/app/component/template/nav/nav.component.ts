import { Router } from '@angular/router';
import { Categoria } from './../../../model/Categoria';
import { BookService } from './../../../service/book.service';
import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categorias: Categoria[]

  constructor(private bookService: BookService, private router:Router, @Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    this.bookService.obterTodasAsCategorias().subscribe(categorias => {
      this.categorias = categorias

      })

  }
  
}
