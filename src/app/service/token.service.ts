import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  obterToken() {
    return localStorage.getItem("TOKEN")
  }
  
  removerToken() {
    localStorage.removeItem("TOKEN")
  }

  setarToken(token:string) {
    localStorage.setItem("TOKEN", token)
  }

  isTokenExiste(): boolean {
    return this.obterToken() == null || 
           this.obterToken().trim() == "" ? false: true
  }
}
