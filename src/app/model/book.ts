import { Categoria } from './Categoria';

export class Book {
    
    id: number
    titulo: string
    autor: string
    editora: string
    preco: number
    precoAnterior: number
    descricao: string
    idioma: string
    link: string
    imagemURL: string
    dataPublicacao: string
    dataCriacao:string
    categoria: Categoria
}
