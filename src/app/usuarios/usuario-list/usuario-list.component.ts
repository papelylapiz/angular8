import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.sass']
})
export class UsuarioListComponent implements OnInit {

  Usuario: any = [];

  title = 'Lista de Usuarios';


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  this.getUsuarios();

  }

  getUsuarios() {
      return this.usuarioService.getUsuarios().subscribe((data:{}) => {
        this.Usuario = data;
      })
  }

  deleteUsuario(id){
    if(window.confirm('Esta seguro de eliminar el usuario')){
      this.usuarioService.deleteUsuario(id).subscribe(data=>{
        this.getUsuarios()
      })
    }
  }

}
