import { Component, OnInit } from '@angular/core';
import { Registercus } from 'src/app/Model/registercus';
import { RegisterserviceService } from 'src/app/Service/registerservice.service';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  constructor(private regservice:RegisterserviceService ) { }
  reg!:Registercus;
  handle(email:string,password:string)
  {
    this.reg=new Registercus(email,password);
  
    this.regservice.saveData(this.reg).subscribe((data)=>{
      this.reg=data;
      console.log("hello");
      console.log(JSON.stringify(this.reg));
    });

  }

  ngOnInit(): void {
  }

}
