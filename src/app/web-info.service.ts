import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebInfoService {

  constructor(private http: HttpClient) { }

  getGithubInfo(){
    return this.http.get('https://api.github.com/users/benjarit');
  }
  getYoutubeInfo(){
    return this.http.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCXnmQqdbJzJb-OlfA2aYAvg&key=AIzaSyCI5KFJFBw8RD0h2HV5LjUIAitznVi_-7A');
  }
}
