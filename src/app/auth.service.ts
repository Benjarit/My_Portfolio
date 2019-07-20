import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  
  getUserDetail(loginInfo: userInfo){
    console.log(loginInfo);
    this.http.post('/post/login', loginInfo)
    .subscribe((response)=>{
      console.log('repsonse ',response);
    });
  }
}
interface userInfo{
  username: String;
  password: String;
}
