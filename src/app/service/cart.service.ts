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

  adicionarItemCarrinho(item: Item) {
    let indexItemExistente = this.retornarIndexItemExistente(item)
    
    if (indexItemExistente > -1)
      this.itens[indexItemExistente].quantidade = this.itens[indexItemExistente].quantidade + item.quantidade
    else
      this.itens.push(item)

    this.calcularTotais()
  }

  retornarIndexItemExistente(item: Item) {
    return this.itens.findIndex(itemIt => itemIt.id == item.id)
  }

  calcularTotais() {
    let total: number = 0
    let totalQtdd: number = 0

    this.itens.forEach(item => {
      totalQtdd += Number(item.quantidade)
      total += Number(item.quantidade) * item.preco
    })

    this.totalQtdd.next(totalQtdd)
    this.totalPreco.next(total)
  }

  deletarTudo() {
    this.itens = []
    this.totalQtdd = new Subject<number>()
    this.totalPreco = new Subject<number>()
  }

  alterarQuantidade(item: Item, quantidade) {
    if (quantidade <= 0) {
      this.remover(item)
    } else if (quantidade < 11) {
      let indexItem = this.retornarIndexItemExistente(item)

      this.itens[indexItem].quantidade = quantidade
      this.calcularTotais()
    }
  }

  remover(item: Item) {
    let indexItem = this.retornarIndexItemExistente(item)

    if (indexItem > -1) {
      this.itens.splice(indexItem, 1);
      this.calcularTotais();
    }
  }
}
