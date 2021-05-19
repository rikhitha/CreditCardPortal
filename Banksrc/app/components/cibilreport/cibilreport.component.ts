import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CbiService } from 'src/app/service/cbi.service';

@Component({
  selector: 'app-cibilreport',
  templateUrl: './cibilreport.component.html',
  styleUrls: ['./cibilreport.component.css']
})
export class CibilreportComponent implements OnInit {
  cibilscore :any = [];
  constructor(private Api:CbiService) { }
  ngOnInit(): void 
  {
    this.allscore();
    
  }

  allscore(){
    this.Api.getreport().subscribe((response)=> {
      this.cibilscore = response;
    })
    }

}
