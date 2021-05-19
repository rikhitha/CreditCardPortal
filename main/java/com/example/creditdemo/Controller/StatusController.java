package com.example.creditdemo.Controller;
import com.example.creditdemo.Model.Checkstatus;
import com.example.creditdemo.Services.Getstatus;
import com.example.creditdemo.Services.checkstatusservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class StatusController
 {
    @Autowired
    checkstatusservice csservice;

    @PostMapping("/status")
    public void add(@RequestBody Checkstatus checkstatustable) 
    {
        csservice.save(checkstatustable);
    }

    @Autowired
    private Getstatus getstausserv;
    @GetMapping("/getstatus")
    public Iterable<Checkstatus> list() 
    {
        return getstausserv.fetchAllData();
    }
  
    
}
