import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: Item[] = []
  totalQtdd: Subject<number>
  totalPreco: Subject<number>

  constructor() {
    this.totalQtdd = new Subject<number>()
    this.totalPreco = new Subject<number>()
  }

  adicionarCarrinho(item: Item) {
    let index = this.retornarIndexItemExistente(item)
    
    if (index > -1)
      this.itens[index].quantidade = this.itens[index].quantidade + item.quantidade
    else
      this.itens.push(item)

    this.calcularPreco()
  }

  retornarIndexItemExistente(item: Item) {
    return this.itens.findIndex(itemIt => itemIt.id == item.id)
  }

  calcularPreco() {
    let total: number = 0
    let totalQtdd: number = 0

    this.itens.map(item => {
      totalQtdd += Number(item.quantidade)
      total += Number(item.quantidade) * item.preco
    })

    this.totalQtdd.next(totalQtdd)
    this.totalPreco.next(total)
  }

  deletarTudo() {
    this.itens = []
    this.calcularPreco()
  }

  alterarQtdd(item: Item, qtdd) {
    if (qtdd <= 0)
      this.remover(item)

    else if (qtdd < 11) {
      let index = this.itens.findIndex(
        itemIt => itemIt.id === item.id
      )

      this.itens[index].quantidade = qtdd
      this.calcularPreco()
    }
  }

  remover(item: Item) {
    let index = this.itens.findIndex(
      itemIt => itemIt.id === item.id
    )

    if (index > -1) {
      this.itens.splice(index, 1);
      this.calcularPreco();
    }
  }
}
