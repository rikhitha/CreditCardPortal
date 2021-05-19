import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchstatusService {

  staturl:string="http://localhost:8080/api/getstatus";

  constructor(private http:HttpClient) { }
  fetchDataByappNumber()
  {
    return this.http.get(this.staturl);
  }
}
