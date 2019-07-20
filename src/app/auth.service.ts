import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetail(loginInfo: userInfo){
    console.log(loginInfo);
    return this.http.post('/api/login', loginInfo);
  }
}
interface userInfo{
  username: String;
  password: String;
}
