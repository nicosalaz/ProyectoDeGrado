import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesPerfilService {
  apiBaseUrl = environment.apiUrl + '/api/';
  constructor(public http: HttpClient) { }

  getPublicaciones(id: any) {
    return this.http.get<any>(`${this.apiBaseUrl}publicacion/publicacionUsuario/${id}`);
  }

  postPublicaciones(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}publicacion/crearPublicacion`, body);
  }

  getReaccionesUsers(id: any) {
    return this.http.get<any>(`${this.apiBaseUrl}reaccion/reaccionUser/${id}`);
  }

  postReaccion(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}reaccion/crearReaccion`, body);
  }

  patchPublicacion(body:any){
    return this.http.patch<any>(`${this.apiBaseUrl}publicacion/publicacionActu`, body);
  }

  patchDeletePublicacion(body:any){
    return this.http.patch<any>(`${this.apiBaseUrl}publicacion/publicacionDelete`, body);
  }

  getComentarios(id:number){
    return this.http.get<any>(`${this.apiBaseUrl}comentario/comentarioPublicacion/${id}`);
  }

  postComertario(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}comentario/crearComentario`, body);
  }

  patchActualizarComentario(body:any){
    return this.http.patch<any>(`${this.apiBaseUrl}comentario/comentarioActualizar`, body);
  }

  patchDeleteComentario(body:any){
    return this.http.patch<any>(`${this.apiBaseUrl}comentario/deleteComentario`, body);
  }
}
