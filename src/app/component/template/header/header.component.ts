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

  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.totalQtdd.subscribe(qtdd => {
      this.cartSize = qtdd
    }
    )
  }

  buscar(event): void {
    this.route.navigate(['/book/search/' + event.target.value])
  }

  showDrop(): void {
    var drop = document.getElementById("dropdown")
      drop.classList.add("showing")
      drop.classList.add("hiding")
  }

  removeDrop() {
    var drop = document.getElementById("dropdown")
    drop.classList.remove("showing")
    drop.classList.remove("hiding")
  }

}
