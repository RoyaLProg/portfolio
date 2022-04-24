import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './response';
import { User } from './user';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  connect(username: string, password: string): Observable<Response> {
    var body: User = {username: username, password: password};
    return this.http.post<Response>('http://localhost:3000/user/connect', body);
  }

  setSession(response : Response): void {
    const expiresAt = moment().add(response.data.expiresIn, 'minutes');
    localStorage.setItem('SESSTOKEN', response.data.token);
    localStorage.setItem('EXPIRES_AT', JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    localStorage.removeItem('SESSTOKEN');
    localStorage.removeItem('EXPIRES_AT');
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): moment.Moment {
    const expiration = localStorage.getItem('EXPIRES_AT');
    if (expiration) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    else
      return moment();
  }
}
