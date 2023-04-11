import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserAuth } from '../interfaces/user-auth';
import { UserBasicInfo } from '../interfaces/user-basic-info';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  inLogin = true;
  apiBaseUrl = environment.apiUrl + '/auth';
  constructor(public http: HttpClient, private router: Router) {}

  set localStorageToken(token: string) {
    localStorage.setItem('token', token);
  }


  set localStorageUser(user: {}) {
    localStorage.setItem('user', JSON.stringify(user));
  }


  userAuth(body: UserAuth) {
    return this.http.post<any>(`${this.apiBaseUrl}`, body);
  }

  logout() {
    this.router.navigate(['landing-page/login']);
    window.location.reload();
    localStorage.clear();
  }
}
