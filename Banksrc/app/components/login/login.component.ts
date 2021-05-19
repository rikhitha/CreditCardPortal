import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private navigate:Router) { }

  ngOnInit(): void {}
    handle(username:String,Password:String)
  {
    if(username=="admin" && Password=="admin")
    {
      this.navigate.navigate(['dashboard']);
    }
    else if(username=="Sumathy" && Password=="s123")
    {
      this.navigate.navigate(['dashboard']);
    }
    else if(username=="Rikitha" && Password=="r234")
    {
      this.navigate.navigate(['dashboard']);
    }
    else
    {
      alert("enter correct username and password");
    }
  }
  

}
