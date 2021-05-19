import { Component, OnInit } from '@angular/core';
import { CreditDetailsService } from 'src/app/service/credit-details.service';

@Component({
  selector: 'app-creditdetails',
  templateUrl: './creditdetails.component.html',
  styleUrls: ['./creditdetails.component.css']
})
export class CreditdetailsComponent implements OnInit {
  Ccdetails:any=[];
  constructor(private ccserv:CreditDetailsService) { }

  ngOnInit(): void {
    this.alldet();
  }
  alldet(){
    this.ccserv.getdetails().subscribe((response)=> {
      this.Ccdetails = response;
    })
    }


}
