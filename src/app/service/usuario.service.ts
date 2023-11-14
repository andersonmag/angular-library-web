import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl:string = "https://spring-api-library.onrender.com/api/usuarios"

  constructor(private httpClient: HttpClient, private tokenService:TokenService) { }

  save(usuario: Usuario) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpClient.post(this.baseUrl, JSON.stringify(usuario), httpOptions)
  }

  isLogado() {
    return this.tokenService.isTokenExiste()
  }

  setToken(token: string) {
    this.tokenService.setarToken(token)
 }

  getUser() {
    return this.httpClient.get(`${this.baseUrl}/getUser`)
  }
}
