import { UsuarioService } from 'src/app/service/usuario.service';
import { LoginService } from './../../../service/login.service';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario()
  erros: string[]
  loginForm: FormGroup

  constructor(private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    if (this.usuarioService.isLogado()) {
      this.router.navigateByUrl('/')
      return
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    }, { updateOn: 'blur' })
  }
    
  changePasswordInput() {
    var inputSenha = document.querySelector("#senha");
    var icon = document.querySelector(".form-group .material-icons")

    if (inputSenha.getAttribute("type") == 'text') {
      inputSenha.setAttribute("type", "password")
      icon.textContent = "visibility"

    } else {
      inputSenha.setAttribute("type", "text")
      icon.textContent = "visibility_off"
    }
  }

  fazerLogin() {
    this.usuario.email = this.loginForm.get('email').value
    this.usuario.senha = this.loginForm.get('senha').value

    this.loginService
      .authenticate(this.usuario)
      .subscribe(tk => {
        var token = JSON.parse(JSON.stringify(tk))['token'].split(' ')[1]

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
