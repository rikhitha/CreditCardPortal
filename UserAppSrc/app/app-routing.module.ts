import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ApplycreditcardComponent } from './components/applycreditcard/applycreditcard.component';
import { CheckstatusComponent } from './components/checkstatus/checkstatus.component';
import { CreditcardsComponent } from './components/creditcards/creditcards.component';
import { CustomerdashboardComponent } from './components/customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { HomeComponent } from './components/home/home.component';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';

const routes: Routes = [
  {path:"customerdashboard",component:CustomerdashboardComponent},
  {path:"customerlogin",component:CustomerloginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:'home',component:HomeComponent},
  {path:"creditcard",component:CreditcardsComponent},
  {path:"applycreditcard",component:ApplycreditcardComponent},
  {path:"register",component:UserregistrationComponent},
  {path:"checkstatus",component:CheckstatusComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
