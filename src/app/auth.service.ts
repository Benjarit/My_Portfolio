import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserInfo{
  username: String;
  password: String;
}
interface Server{
  sucess: boolean;
  msg: String;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _login: boolean = false;
  // private readonly JWT_TOKEN = 'JWT_Token';
  // private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  // private loggedUser: string;

  constructor(private http: HttpClient) { }
  getUserDetail(loginInfo: UserInfo): Observable<Server>{
    return this.http.post<Server>('/api/user', loginInfo);
  }
  set login(x){
    this._login = x;
  }
  get login(){
    return this._login;
  }
}