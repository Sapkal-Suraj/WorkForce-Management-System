import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { HeaderComponent } from "../header/header.component";
import { Employee } from './model/employee';
import { AddemployeeComponent } from '../addemployee/addemployee.component';

@Component({
    selector: 'app-deatails',
    standalone: true,
    templateUrl: './deatails.component.html',
    styleUrl: './deatails.component.css',
    imports: [HeaderComponent,AddemployeeComponent]
})
export class DeatailsComponent {

  empData:Employee= <Employee> {};

  constructor(private route:ActivatedRoute,
              private service:HttpService
  ) { }

  ngOnInit(): void {
    this.getdataFromUrl();
  }

  getdataFromUrl(){
    this.route.paramMap
    .subscribe((param:any)=>{
     // console.log(param.get("id"));
      this.service.getRecordById(param.get("id"))
      .subscribe((response:any)=>{
        console.log(response);
        this.empData=response;
      })
    })
  }

}
