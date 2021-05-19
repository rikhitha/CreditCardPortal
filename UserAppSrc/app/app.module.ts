import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdashboardComponent } from './components/customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { CreditcardsComponent } from './components/creditcards/creditcards.component';
import { ApplycreditcardComponent } from './components/applycreditcard/applycreditcard.component';
import { CheckstatusComponent } from './components/checkstatus/checkstatus.component';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdashboardComponent,
    CustomerloginComponent,
    AboutusComponent,
    HomeComponent,
    CreditcardsComponent,
    ApplycreditcardComponent,
    CheckstatusComponent,
    UserregistrationComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule,
   AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
