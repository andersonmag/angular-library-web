import { Router } from '@angular/router';
import { Categoria } from './../../../model/Categoria';
import { BookService } from './../../../service/book.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewChecked {

  categorias: Categoria[]
  index: any

  constructor(private bookService: BookService, private router: Router) { }

  ngAfterViewChecked(): void {
    var links = document.getElementsByName("link")

    this.index ? links[this.index].classList.remove('actual') : ''

    for (let i = 0; i < links.length; i++) {
      var linkLocal = links[i].getAttribute("href")
      
      links[i].classList.remove('actual');
      if (linkLocal == location.pathname) {
        links[i].classList.add('actual');
        this.index = i
        break
      }
    }
  }

  ngOnInit(): void {

    this.bookService.obterTodasAsCategorias().subscribe(categorias => {
      this.categorias = categorias
    })
  }

}
