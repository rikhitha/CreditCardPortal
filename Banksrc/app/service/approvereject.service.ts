import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApproveReject } from '../Model/approve-reject';

@Injectable({
  providedIn: 'root'
})
export class ApproverejectService {

  public arurl:string="http://localhost:8080/api/status";

  constructor(private http:HttpClient) { }

  saveData(stat:ApproveReject ):Observable<ApproveReject >
  {
    return this.http.post<ApproveReject >(this.arurl,stat);
  }

}
