import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/Model/auth';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit 
{
  username:string="admin";
  password:string="admin@12";
  register!:string;
  invalid:boolean = false;

  auth!:Auth;

  constructor(private route:Router,private authService:AuthService) { }

  ngOnInit(): void {
    sessionStorage.setItem("auth","");
  }

  handlelogin(){
    let auth = {
      username : this.username,
      password:this.password,
    };
  
    this.authService.doAuth(this.username,this.password).then((a:Auth[])=>{
      console.log("=======from promise")
      if (a.length>0) {
        sessionStorage.setItem("auth",this.username);
        this.route.navigate(['customerdashboard']);
      } else {
        this.invalid = true;
        this.route.navigate(['login']);
      }
    }).catch((err: string)=>{
      console.log("Error" + err);
    })
    
    this.route.navigate(['customerdashboard']);
    console.log(auth);
    console.log("CanActivate Works!!")
  }

  userregistrationpage()
    {
      this.route.navigate(['register']);
    }
  

}

function userregistrationpage() {
  throw new Error('Function not implemented.');
}
