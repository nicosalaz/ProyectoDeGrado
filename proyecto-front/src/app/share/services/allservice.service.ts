import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  apiBaseUrl = environment.apiUrl + '/api/';
  constructor(public http: HttpClient) { }

  getPublicaciones(){
    return this.http.get<any>(`${this.apiBaseUrl}publicacion`);
  }

  getEspecieArboreas(){
    return this.http.get<any>(`${this.apiBaseUrl}especie-arborea/especieArborea`);
  }

  getEspecie(){
    return this.http.get<any>(`${this.apiBaseUrl}especie`);
  }

  postrequestEspecie(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie-request/crearEspecieArborea`, body);
  }

  postreliminarEspecieArborea(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie-arborea/eliminarEspecieArborea`, body);
  }

  getRequestEspecieArborea(){
    return this.http.get<any>(`${this.apiBaseUrl}especie-request/especieArborea`);
  }

  postEditarEspecieRequest(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie-request/editarEspecieArborea`, body);
  }

  postAceptarEspecieRequest(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie-request/aceptarRequest`, body);
  }

  postRechazarEspecieRequest(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie-request/rechazarRequest`, body);
  }

  postEditarEspecie(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie-arborea/editarEspecieArborea`, body);
  }

  postEliminarEsp(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie/eliminarEspecie`, body);
  }

  postEditaEsp(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie/editarEspecie`, body);
  }

  postCrearEsp(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}especie/crearEspecie`, body);
  }
  
  postCrearUsuario(body:any){
    return this.http.post<any>(`${this.apiBaseUrl}usuarios/create`, body);
  }

  gettipoIdentificacion(){
    return this.http.get<any>(`${this.apiBaseUrl}identificacion`);
  }

  postImages(data:any){
    return this.http.post<any>(`${this.apiBaseUrl}usuarios/create`, data);
  }

  getArboles(){
    return this.http.get<any>(`https://datos.cali.gov.co/api/3/action/datastore_search?q=Arbol&resource_id=73a988ec-24a3-4943-90a7-5fc409fd53f2`);
  }

}
