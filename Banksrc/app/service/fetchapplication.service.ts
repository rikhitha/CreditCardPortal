import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchapplicationService 
{
  appurl:string="http://localhost:8080/api/application";

  constructor(private http:HttpClient) { }
  fetchDataByappNumber()
  {
    return this.http.get(this.appurl);
  }

}
