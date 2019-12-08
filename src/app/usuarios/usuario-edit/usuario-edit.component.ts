import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.sass'],

})
export class UsuarioEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  usuarioData: any = {};

  constructor(
  public userApi: UsuarioService,
  public actRoute: ActivatedRoute,
  public router:Router,
  public location: Location
  ) { }

  ngOnInit() {
  this.userApi.getUsuario(this.id).subscribe((data:{})=>{
    this.usuarioData = data
  })
  }

updateUsuario(){
  if(window.confirm('¿Estas seguro de actualizar al usuario?')){
    this.userApi.updateUsuario(this.id, this.usuarioData).subscribe(data=>{
      this.router.navigate(['/app-usuario-list'])
    })
  }
}
volver():void {
 this.location.back();
//this.router.navigate(['/app-usuario-list'])}
}

}
