import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewccComponent } from './components/viewcc/viewcc.component';
import { CibilreportComponent } from './components/cibilreport/cibilreport.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApproveorRejectComponent } from './components/approveor-reject/approveor-reject.component';
import { CreditdetailsComponent } from './components/creditdetails/creditdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ViewccComponent,
    CibilreportComponent,
    HomeComponent,
    ApproveorRejectComponent,
    CreditdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
