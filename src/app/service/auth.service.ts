import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/posts';
  private _loginUrl = 'http://localhost:3000/posts';

  constructor(private http : HttpClient) { }

  postUser(data:any){
    const httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
  };

  return this.http.post<any>(this._registerUrl, data);
}

getUser(data:any){

  return  this.http.get(this._loginUrl,data)

 }

}