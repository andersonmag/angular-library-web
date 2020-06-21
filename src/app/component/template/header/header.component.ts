import { Item } from './../../../model/item';
import { Book } from './../../../model/book';
import { CartService } from './../../../service/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  q: string = 'soft'
  cartSize = 0
  itens: Item[]
  cartPrecoTotal = 0

  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.totalQtdd.subscribe(qtdd => {
      this.cartSize = qtdd
      this.itens = this.cartService.itens

      this.cartService.totalPreco.subscribe(total => {
        this.cartPrecoTotal = total
      })
     
    }
    )
  }

  buscar(event): void {
    this.route.navigate(['/book/search/' + event.target.value])
  }

  

  showDrop() {
    var drop = document.getElementById("dropdown")
      
      if(!drop.classList.contains("showing")){
        drop.classList.add("showing")
        drop.classList.add("hiding")
      }

    else {
      drop.classList.remove("showing")
      drop.classList.remove("hiding")
    }
  }

}
