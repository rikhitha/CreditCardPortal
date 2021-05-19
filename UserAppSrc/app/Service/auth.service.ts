import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../Model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  auth:Auth[] = [
    {"username":"admin","password":"admin@12"},
    {"username":"sumi","password":"sumi123"},
    {"username":"riki","password":"riki12345"},
  ]
  loginUrl:string = "http://localhost:3000/auth/";

  constructor(private http:HttpClient) { }

  public getMockPromise():Promise<Auth[]> {
    return Promise.resolve(this.auth);
  }

  public getMockPromiseSlowly(): Promise<Auth[]>{
  
    let promise = new Promise<Auth[]>(resolve => {
      setTimeout(()=>resolve(this.getMockPromise()),8000);
    });

    return promise;
  }
  public doAuth(u:string,p:string):Promise<Auth[]> {
    let url = this.loginUrl + "?username=" + u;
    return this.http.get<Auth[]>(url).toPromise();
  }

}
