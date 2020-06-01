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
  
  obterTodosOsLivros(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl);
  }

  obterLivroPorLink(id:string): Observable<Book> {
    return  this.httpClient.get<Book>(this.baseUrl + "/search/" + id)
  }

  obterTodasAsCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.baseUrl + "/categorias")
  }

  obterLivroPorCategoria(id:string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl + "/categorias/" + id)
  }

  obterLivroPorId(id:string): Observable<Book> {
    return this.httpClient.get<Book>(this.baseUrl + "/" + id)
  }
  

}
