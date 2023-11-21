import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../../../model/usuario';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  usuario: Subject<Usuario> = new Subject<Usuario>()

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUser().subscribe(
            usuario => this.usuario.next(usuario as Usuario))
    
    console.log(this.usuario)
  }

}
