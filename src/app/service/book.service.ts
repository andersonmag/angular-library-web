import { Categoria } from './../model/Categoria';
import { Book } from './../model/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl:string = "https://library-angular-api.herokuapp.com/api/livros"

  constructor(private httpClient: HttpClient) { }
  
  obterTodosOsLivros(page?): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl)
  }

  obterLivrosComPaginacao(page:number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl + "?page=" + page)
  }

  pesquisarLivros(q:string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl + "?q=" + q)
  }

  obterLivroPorLink(link:string): Observable<Book> {
    return this.httpClient.get<Book>(this.baseUrl + "/search/" + link)
  }

  obterTodasAsCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.baseUrl + "/categorias")
  }

  obterLivrosPorCategoria(link:string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl + "/categorias/" + link)
  }

  obterLivroPorId(id:string): Observable<Book> {
    return this.httpClient.get<Book>(this.baseUrl + "/" + id)
  }

}
