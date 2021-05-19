import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ccdetails } from '../Model/ccdetails';

@Injectable({
  providedIn: 'root'
})
export class CreditDetailsService {

  apiurl="http://localhost:3000/ApprovedCards";
  constructor(private http:HttpClient) { }
  
  public getdetails():Observable<Ccdetails>{
    
    return this.http.get<Ccdetails>(this.apiurl);
    }

  
}
