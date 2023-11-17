import { Router } from '@angular/router';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = new Usuario()
  registerForm: FormGroup;

  constructor(private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({ 
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    }, { updateOn: 'blur' })
  }

  cadastrar() {
    this.usuario = {
      nome: this.registerForm.get('nome').value,
      email: this.registerForm.get('email').value,
      senha: this.registerForm.get('senha').value  
    }

    this.usuarioService.save(this.usuario)
      .subscribe(() => {
        this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
      }, (err) => {
        console.log(err)
      })
  }

  changePasswordInput() {
    var boolean = this.usuarioService.isLogado()
    console.log(boolean)

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

}
