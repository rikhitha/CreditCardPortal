import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registercus } from '../Model/registercus';


@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService 
{
  public rsurl:string="http://localhost:8080/api/register";

  constructor(private http:HttpClient) { }

  saveData(reg:Registercus):Observable<Registercus>
  {
    return this.http.post<Registercus>(this.rsurl,reg);
  }
}
