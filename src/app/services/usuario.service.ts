import { Injectable } from '@angular/core';
import { Usuario } from '@shared/usuario';
import {Observable} from 'rxjs';
import {  retry, catchError } from 'rxjs/operators';
import * as Config from '@assets/config.json';
import {DataApiRestFulJsonService} from '@services//data-api-rest-ful-json.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  config: any = Config;


  constructor( private dataService : DataApiRestFulJsonService) {
    console.log('Reading local json files');
    console.log(this.config);
    console.log(this.config.default.usuarioUrl);
    this.dataService.setBaseUrl(this.config.default.usuarioUrl);
    console.log(this.dataService.getBaseUrl());
   }


  getUsuarios(): Observable<Usuario> {
    return this.dataService.httpClient.get<Usuario>(this.dataService.getBaseUrl() + '/')
    .pipe(
      retry(1),
      catchError(this.dataService.handleError),

    )
  }

  getUsuario(id): Observable<Usuario> {
    return this.dataService.httpClient.get<Usuario>(this.dataService.getBaseUrl()+ '/' + id)
    .pipe(
      retry(1),
      catchError(this.dataService.handleError),

    )
  }

  createUsuario(usuario): Observable<Usuario> {
    return this.dataService.httpClient.post<Usuario>(this.dataService.getBaseUrl() + '/', JSON.stringify(usuario), this.dataService.httpOptions)
    .pipe(
      retry(1),
      catchError(this.dataService.handleError),

    )
  }

  updateUsuario(id, usuario): Observable<Usuario> {
    return this.dataService.httpClient.post<Usuario>(this.dataService.getBaseUrl() + '/'  + id, JSON.stringify(usuario), this.dataService.httpOptions)
    .pipe(
      retry(1),
      catchError(this.dataService.handleError),

    )
  }

  deleteUsuario(id){
    return this.dataService.httpClient.post<Usuario>(this.dataService.getBaseUrl() + '/'+ id, this.dataService.httpOptions)
    .pipe(
      retry(1),
      catchError(this.dataService.handleError),

    )
  }


}


