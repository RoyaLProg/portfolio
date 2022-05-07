import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../response';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseURL = environment.baseURL;

  changePassword(oldPassword: string, newPassword: string): Observable<Response> {
    return this.http.post<Response>(`${this.baseURL}user/change-password`, { oldPassword, newPassword });
  }
  changeUsername(username: string): Observable<Response> {
    return this.http.post<Response>(`${this.baseURL}user/change-username`, { username });
  }
}
