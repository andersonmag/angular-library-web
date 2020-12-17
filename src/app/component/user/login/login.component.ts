import { UsuarioService } from 'src/app/service/usuario.service';
import { LoginService } from './../../../service/login.service';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  date: number
  usuario: Usuario = new Usuario()
  erros: string[]

  constructor(private loginService:LoginService, private router:Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    if(this.usuarioService.isLogado())
      this.router.navigate(['/'])

    this.date = new Date().getFullYear()
  }

  changePasswordInput() {
    var inputSenha = document.querySelector("#senha");
    var icon = document.querySelector(".form-group .material-icons")

    if(inputSenha.getAttribute("type") == 'text') {
      inputSenha.setAttribute("type", "password")
      icon.textContent = "visibility"

    } else {
      inputSenha.setAttribute("type", "text")
      icon.textContent = "visibility_off"
    } 
  }

  fazerLogin () {
    this.loginService
            .authenticate(this.usuario)
            .subscribe(tk => {
              var token = JSON.parse(JSON.stringify(tk)).Authorization.split(' ')[1]

              this.usuarioService.setToken(token)
              this.router.navigate(['/'])
              .then(() => {
                window.location.reload();
              });

            }, error => {
              console.log(error)
            })
   }

}
