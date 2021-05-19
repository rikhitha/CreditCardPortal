import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Application } from 'src/app/Model/application';
import { ApplicationserviceService } from 'src/app/Service/applicationservice.service';
import { v4 as uuid } from 'uuid';




@Component({
  selector: 'app-applycreditcard',
  templateUrl: './applycreditcard.component.html',
  styleUrls: ['./applycreditcard.component.css']
})
export class ApplycreditcardComponent implements OnInit {
  fh!:any;
  registerForm!: FormGroup;
  submitted = false;
   
  
   cardtype:any=['ELITE American Express Card','PRIME American Express Card','IRCTC Platinum Card','Air India Signature Card'];
   
   public list!:string;
   uuid!:string;
  constructor(private formBuilder: FormBuilder,private appservice:ApplicationserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender:['', Validators.required],
      age: [null,Validators.required],
      email: ['', Validators.email],
      country:['',Validators.required],
      city:[''],
      maritalstatus:[''],
      dependents:['',Validators.required],
      cardtype:['', Validators.required],
      mobilenumber:['', Validators.required],
      pannumber:['',Validators.required],
      aadharnumber:['',Validators.required],
      income:['',Validators.required]
     
      
      
      
  });
  
  }
  get f() { return this.registerForm.controls; }

  sendotp()
  {

  }
  verifyotp()
  {

  }
  idchange()
  {
    
    console.log(typeof uuid());
    this.list=uuid();
    this.uuid=this.list;

  }
  
  app!:Application ;
  onSubmit(firstname:string,lastname:string,age:string,gender:string,maritalstatus:string,dependents:string,email:string,country:string,city:string,mobilenumber:string,pannumber:string,aadharnumber:string,income:string,cardtype:string) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else
    {
      this.uuid=this.list;
      this.app=new Application (firstname,lastname,age,gender,maritalstatus,dependents,email,country,city,mobilenumber,pannumber,aadharnumber,income,cardtype,this.uuid);
  
      this.appservice.saveData(this.app).subscribe((data)=>{
        data=this.app;
        
        console.log("hello");
        console.log(this.list);
        console.log(this.uuid);
        alert("Application Submitted Your Reference Number is"+this.list);

        console.log(JSON.stringify(data));

      });
    }
    
    
    
    
    
}

}
