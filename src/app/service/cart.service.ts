import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: Item[] = []
  totalQtdd: Subject<number> = new Subject<number>()
  totalPreco: Subject<number> = new Subject<number>()

  constructor() { }

  adicionarCarrinho(item: Item): void {

    if (!this.verificarExistenciaLivro(item)) {
      this.itens.push(item)
    }
    this.calcularPreco()
  }

  verificarExistenciaLivro(item: Item) {

    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].id == item.id) {
        this.itens[i].quantidade += item.quantidade
        return true
      }
    }
  }

  calcularPreco() {

    let total: number = 0
    let totalQtdd: number = 0
    
    for (let item of this.itens) {
      total += item.quantidade * item.preco
      totalQtdd += item.quantidade
    }

    this.totalQtdd.next(totalQtdd)
    this.totalPreco.next(total)
  }
}
