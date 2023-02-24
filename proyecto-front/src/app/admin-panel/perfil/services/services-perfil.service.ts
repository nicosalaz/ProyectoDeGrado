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
}
