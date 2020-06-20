import { Book } from 'src/app/model/book';
import { Item } from './../model/item';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens:Item[] = []
  totalQtdd: Subject<number> = new Subject<number>()
  totalPreco: Subject<number> = new Subject<number>()

  constructor() { }

  adicionarCarrinho(item:Item): void {
    this.itens.push(item)

    this.totalQtdd.next(this.itens.length)
  }


}
