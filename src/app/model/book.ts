import { Categoria } from './Categoria';

export class Book {
    
    id: number
    titulo: string
    autor: string
    editora: string
    preco: string
    precoAnterior: string
    descricao: string
    idioma: string
    link: string
    imagemURL: string
    dataPublicacao: string
    dataCriacao:string
    categoria: Categoria
}
