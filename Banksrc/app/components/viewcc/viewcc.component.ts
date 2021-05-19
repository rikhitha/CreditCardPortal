import { Component, OnInit } from '@angular/core';
import { Viewcc } from 'src/app/Model/viewcc';
import { FetchapplicationService } from 'src/app/service/fetchapplication.service';

@Component({
  selector: 'app-viewcc',
  templateUrl: './viewcc.component.html',
  styleUrls: ['./viewcc.component.css']
})
export class ViewccComponent implements OnInit {

  constructor(private fetchappserv:FetchapplicationService) { }

  ngOnInit(): void {
  }
  fetchapp!:Viewcc[];
appnumber!:number;
  fetchData()
  {
    
    this.fetchappserv.fetchDataByappNumber().subscribe((data:any)=>
    {
      this.fetchapp=data;
      console.log(data);
    })
  }

}
