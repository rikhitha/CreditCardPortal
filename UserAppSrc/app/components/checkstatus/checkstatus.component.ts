import { Component, OnInit } from '@angular/core';
import { Registercus } from 'src/app/Model/registercus';
import { Status } from 'src/app/Model/status';
import { FetchstatusService } from 'src/app/Service/fetchstatus.service';

@Component({
  selector: 'app-checkstatus',
  templateUrl: './checkstatus.component.html',
  styleUrls: ['./checkstatus.component.css']
})
export class CheckstatusComponent implements OnInit {

  constructor(private fetchstatusserv:FetchstatusService) { }

  ngOnInit(): void {
  }

fetchstat!:Status[];
  
  fetchData()
  {
    
    this.fetchstatusserv.fetchDataByappNumber().subscribe((data:any)=>
    {
      this.fetchstat=data;
      console.log(data);
    });
  }

  

}
