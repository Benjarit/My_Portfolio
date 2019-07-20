import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetail(loginInfo: UserInfo): Observable<Server>{
    console.log(loginInfo);
    return this.http.post<Server>('/api/user', loginInfo);
  }
}
interface UserInfo{
  username: String;
  password: String;
}
interface Server{
  sucess: Boolean;
  msg: String;
}