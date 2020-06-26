import { Item } from './../../../model/item';
import { CartService } from './../../../service/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  carrinhoQuantidade = 0
  itens: Item[]
  precoTotal = 0

  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.informacoesCarrinho()
  }

  informacoesCarrinho() {
    this.cartService.totalQtdd.subscribe(totalQtdd => {
      this.carrinhoQuantidade = totalQtdd
      this.itens = this.cartService.itens
    })

    this.cartService.totalPreco.subscribe(totalPreco =>
      this.precoTotal = totalPreco
    )
  }

  buscar(event): void {
    var busca = event.target.value
    this.route.navigate([`/book/search/${busca}`])
  }

  removeDrop() {
    var drop = document.getElementById("dropdown")

    drop.classList.remove("showing")
    drop.classList.remove("hiding")
  }


  showDrop() {
    var drop = document.getElementById("dropdown")

    drop.classList.add("showing")
    drop.classList.add("hiding")
  }

}
