package com.example.creditdemo.Controller;
import com.example.creditdemo.Model.Register;
import com.example.creditdemo.Services.Registerservice;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class RegisterController 
{
    

    @PostMapping("/register")
    public void add(@RequestBody Register register) 
    {
        Registerservice.save(register);
    }
    
    public static void main(String[] args) {
        SpringApplication.run(RegisterController.class, args);
    }
    
    
}
