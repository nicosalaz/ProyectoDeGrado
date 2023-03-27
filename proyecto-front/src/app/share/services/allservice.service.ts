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
}
