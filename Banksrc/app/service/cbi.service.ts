import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cibilreport } from '../Model/cibilreport';

@Injectable({
  providedIn: 'root'
})
export class CbiService {
  // cibi:String="";
  // pan_number:String="";
  apiurl="http://localhost:3000/cbi";
  constructor(private http: HttpClient) { }
  
  public getreport():Observable<Cibilreport>{
    
    return this.http.get<Cibilreport>(this.apiurl);
    }

}
