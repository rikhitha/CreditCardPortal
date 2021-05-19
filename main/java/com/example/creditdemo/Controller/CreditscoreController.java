package com.example.creditdemo.Controller;

import com.example.creditdemo.Model.creditscore;
import com.example.creditdemo.Services.Creditservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class CreditscoreController 
{
    @Autowired
    private Creditservice csd;

     @PostMapping(value="/creditscore")
     public ResponseEntity<creditscore> submitData(@RequestBody creditscore cs)
     {
         try{
            creditscore r=csd.saveData(cs);
           return new ResponseEntity<>(r,HttpStatus.CREATED);
         }
         catch(Exception e)
         {
             return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
         }
         
     }
 
}
