import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  username:String="Thomas";

  constructor(private route:Router) { }
  handle()
  {
    this.route.navigate(['customerlogin']);
  }

  ngOnInit(): void {
  }
  downloadPdf(pdfUrl: string, pdfName: string ) {
   
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
