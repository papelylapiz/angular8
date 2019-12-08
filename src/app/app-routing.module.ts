import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuarios/usuario-detail/usuario-detail.component';

import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

const routes: Routes = [
{path:'',pathMatch:'full', redirectTo: 'app-usuario-list'},
{path:'app-usuarios',component: UsuariosComponent},
{path:'app-usuario-detail/:id', component: UsuarioDetailComponent},
{path:'app-usuario-edit/:id', component: UsuarioEditComponent},
{path: 'app-usuario-list', component: UsuarioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class AppRoutingModule { }
