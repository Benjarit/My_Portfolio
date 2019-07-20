import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetail(loginInfo){
    console.log(loginInfo);
    return this.http.post('/api/login', loginInfo);
  }
}