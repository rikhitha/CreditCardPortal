import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveorRejectComponent } from './components/approveor-reject/approveor-reject.component';
import { CibilreportComponent } from './components/cibilreport/cibilreport.component';
import { CreditdetailsComponent } from './components/creditdetails/creditdetails.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ViewccComponent } from './components/viewcc/viewcc.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'viewcc', component:ViewccComponent},
  {path:'cbi',component:CibilreportComponent},
  {path:'approve', component:ApproveorRejectComponent},
  {path:'CCdetails', component:CreditdetailsComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
