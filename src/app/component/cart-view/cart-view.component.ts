import { Item } from './../../model/item';
import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  quantidade = 0
  itens: Item[]
  precoTotal = 0

  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit() {
    this.carrinhoDetalhes();
  }

  carrinhoDetalhes() {
    this.cartService.totalPreco.subscribe(total => {
      this.precoTotal = total
      this.itens = this.cartService.itens
    })

    this.cartService.calcularTotais();
  }

  alterarQuantidade(item: Item, event) {
    let itemQuantidade = event.target.value

    this.cartService.alterarQuantidade(item, itemQuantidade)
  }

  deletar(item: Item) {
    this.cartService.remover(item)
  }

  esvaziarCarrinho() {
    this.cartService.deletarTudo()
  }
}
