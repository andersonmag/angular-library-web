import { Item } from './../../model/item';
import { CartService } from './../../service/cart.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  q: string = 'soft'
  cartSize = 0
  itens: Item[] 
  cartPrecoTotal = 0
  itemPrecoUnit = 0

  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartDetails();
  }

  cartDetails() {

    this.cartService.totalPreco.subscribe(
      data => {
        this.cartPrecoTotal = data
        this.itens = this.cartService.itens
      }
    );

    this.cartService.totalQtdd.subscribe(
      data => this.cartSize = data
    );

    this.cartService.calcularPreco();
  }

  alterarQuantidade(item:Item, event) {
    let qtdd = event.target.value
    
    this.cartService.alterarQtdd(item, qtdd)
  }

  deletar(item: Item) {
    this.cartService.remover(item)
  }

  esvaziarCart() {
    this.cartService.deletarTudo()
  }

}
