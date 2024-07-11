import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./deatails/model/user";

@Injectable({
    providedIn: 'root'
  })
  export class HttpService {
  
     baseurl:string='http://localhost:8080/api/'
      constructor(private http:HttpClient) { }
  
      getAllRecord(){
      return (this.http.get(`${this.baseurl}getallEmp`));
        } 
      getRecordById(id:any){
        return (this.http.get(`${this.baseurl}getparticularEmp/${id}`));
       }
     
       getAllCountry(){
         return (this.http.get(`${this.baseurl}getallCountry`));
       }
      
       login(obj:any) {
        return (this.http.post(`${this.baseurl}login`, obj));
      }
      
     
       PostRecord(obj:any){
          return (this.http.post(`${this.baseurl}addEmployee`,obj,{
             responseType:'text'
           }));
       } deleteData(id:any){
        return (this.http.delete(`${this.baseurl}deleteEmp/${id}`,{
          responseType:'text'
            }));
        } updateRecord(obj:any){
           return (this.http.put(`${this.baseurl}updateEmp`,obj,{
              responseType:'text'
            }));
          } 
          
        // Example in user.service.ts
saveUser(user: User): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>(`${this.baseurl}saveUser`, user, { headers });
}

            
  getAllUsers(){
    return this.http.get(`${this.baseurl}getAllUsers`);
  }

  getUser(userid: number): Observable<any> {
    return this.http.get(`${this.baseurl}getUser${userid}`);
  }

 

  deleteUser(userid: any) {
    return (this.http.delete(`${this.baseurl}deleteUser/${userid}`,{ responseType:'text'}));
  }
          }