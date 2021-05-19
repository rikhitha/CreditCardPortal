import { Component, OnInit } from '@angular/core';
import { ApproveReject } from 'src/app/Model/approve-reject';
import { ApproverejectService } from 'src/app/service/approvereject.service';

@Component({
  selector: 'app-approveor-reject',
  templateUrl: './approveor-reject.component.html',
  styleUrls: ['./approveor-reject.component.css']
})
export class ApproveorRejectComponent implements OnInit {

  constructor(private apprejservice:ApproverejectService) { }

  
  stat!:ApproveReject;
  handle(referncenumber:string,statusupdate:string)
  {
    this.stat=new ApproveReject(referncenumber,statusupdate);

    this.apprejservice.saveData(this.stat).subscribe((data)=>{

      this.stat=data;
      console.log(JSON.stringify(this.stat));

    });
    alert("Status Updated");
  }
  ngOnInit(): void {
  }

}
