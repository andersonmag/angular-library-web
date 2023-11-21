import { LoginService } from '../../../../service/login.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { Categoria } from '../../../../model/Categoria';
import { BookService } from '../../../../service/book.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navBook.component.html',
  styleUrls: ['./navBook.component.css']
})
export class NavBookComponent implements OnInit, AfterViewChecked {

  categorias: Categoria[]
  index: any
  icon_name: string = "menu_open"
  
  constructor(private bookService: BookService, private router: Router,
              private loginService:LoginService) { }

  ngOnInit(): void {
    this.obterCategorias()
  }

  ngAfterViewChecked(): void {
    this.buscarCategoriaSelecionada()

  }

  buscarCategoriaSelecionada() {
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



  obterCategorias() {
    this.bookService.obterTodasAsCategorias().subscribe(categorias => {
      this.categorias = categorias
    })
  }

  alterarNav(): void {
    var sidebar = document.getElementById("wrapper")

    if (sidebar.classList.contains("toggled")) {
      sidebar.classList.remove("toggled")
      this.icon_name = "menu_open"
    }
    else {
      sidebar.classList.add("toggled")
      this.icon_name = "menu"
    }
  }
}
