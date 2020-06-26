import { Midia } from './midia';
import { Book } from 'src/app/model/book';

export class Item {

    id: number
    nome: string
    imagemUrl: string
    quantidade: number
    book: Book
    preco: number
    midia: Midia

    constructor(book: Book, qtdd: number, midia: Midia) {
        this.id = book.id
        this.imagemUrl = book.imagemURL
        this.nome = book.titulo
        this.preco = book.preco
        this.book = book
        this.quantidade = qtdd
        this.midia = midia
    }
}