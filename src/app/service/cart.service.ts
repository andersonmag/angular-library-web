import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  itens: Item[] = []
  totalQtdd: Subject<number> = new Subject<number>()
  totalPreco: Subject<number> = new Subject<number>()
  qtdd: number = 0

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
        this.itens[i].quantidade += Number(item.quantidade)
        return true
      }
    }
  }

  calcularPreco() {

    let total: number = 0
    let totalQtdd: number = 0
    this.qtdd = 0

    for (let item of this.itens) {
      total += item.quantidade * item.preco
    }

    for (let i = 0; i < this.itens.length; i++) {
      this.qtdd += Number(this.itens[i].quantidade);
    }

    this.totalQtdd.next(this.qtdd)
    this.totalPreco.next(total)
  }

  deletarTudo() {

    this.itens = []
    this.calcularPreco()
  }

  alterarQtdd(item: Item, qtdd) {

    if (qtdd <= 0) {
      this.remover(item)
    }

    else if (qtdd < 11) {
      let index: number = this.itens
        .findIndex(
          tempCartItem => tempCartItem.id === item.id
        );

      this.itens[index].quantidade = qtdd
      this.calcularPreco()

    }
  }

  remover(item: Item) {
    let index: number = this.itens
      .findIndex(
        tempCartItem => tempCartItem.id === item.id
      );

    if (index > -1) {
      this.itens.splice(index, 1);
      this.calcularPreco();
    }
  }
}
