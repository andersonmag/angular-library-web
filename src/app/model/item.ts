import { Book } from 'src/app/model/book';

export class Item {

    id:number
    nome: string
    imagemUrl: string
    quantidade:number

    constructor(book:Book){
        this.id = book.id
        this.imagemUrl = book.imagemURL
        this.nome = book.titulo
    }

}