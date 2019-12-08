import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioService } from '@services/usuario.service';
import { DataApiRestFulJsonService } from '@services/data-api-rest-ful-json.service';
import { UsuarioDetailComponent } from './usuarios/usuario-detail/usuario-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    UsuarioEditComponent,
    UsuarioListComponent,
    UsuarioDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    UsuarioService,
    DataApiRestFulJsonService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
