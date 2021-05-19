import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../Model/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationserviceService {

  public appurl:string="http://localhost:8080/api/application";

  constructor(private http:HttpClient) { }

  saveData(app:Application):Observable<Application>
  {
    return this.http.post<Application>(this.appurl,app);
  }
}
