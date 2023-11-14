import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { Usuario } from './../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl:string = "https://spring-api-library.onrender.com/api/login"

  constructor(private http: HttpClient, private router: Router,
              private tokenService:TokenService) { }

  authenticate(usuario: Usuario) {
    const body = { 
                  "email":usuario.email,
                  "senha":usuario.senha 
                }
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    console.log(body)                

    return this.http.post(this.baseUrl, JSON.stringify(body), httpOptions)
  }

  isLogado() {
    return this.tokenService.isTokenExiste()
  }

  deslogar() {
    this.tokenService.removerToken()
  }

}
