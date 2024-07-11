import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../http.service';
import { DeatailsComponent } from '../deatails/deatails.component';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';
//import { RouterComponent } from "../router/router.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent,DeatailsComponent,CommonModule,RouterLink]
})

export class HomeComponent implements OnInit{
    empData:any[]=[];
    isSelect: boolean=false;
    recordId!:any;
    constructor(private service:HttpService,private router:Router) { }
  
    ngOnInit(): void {
      this.getAllEmp1();
    }
    getAllEmp1(){
      this.service.getAllRecord()
      .subscribe((response:any)=>{this.empData=response;
        
      },(myerror)=>{alert("something is went wrong...");});
    }
     onUpdate(){
    if(this.isSelect){
      this.router.navigate(['/addemp',this.recordId]);
    }else{
      alert("plese select A record to be updated....")
    }

  }
  onRadio(id:any){
    this.isSelect=true;
    this.recordId=id;

  }onDelete(){
    if(this.isSelect){
      
      if(confirm("Are you want to delete this record"))
        {
          this.service.deleteData(this.recordId).subscribe((response: any)=>{
            alert(response);
            this.getAllEmp1();
          })
        }
    }else{
      alert("please select a record to be deleted...")
    }
  }

}
