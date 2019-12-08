import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.sass'],

})
export class UsuarioDetailComponent implements OnInit {
  id = this.navegate.snapshot.params['id'];
  userData: any = {};


  constructor(
    private apiUser : UsuarioService,
    private route : Router,
    private navegate : ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.apiUser.getUsuario(this.id).subscribe((data:{})=>{
      this.userData = data;
    })
  }

volver(): void {
 this.location.back();
  //this.route.navigate(['/app-usuario-list']);
}

}
