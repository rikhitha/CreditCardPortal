import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username:String="";
  Password:String="";
  apiurl="http://localhost:3000/logindata";
 

  constructor() { }
}
