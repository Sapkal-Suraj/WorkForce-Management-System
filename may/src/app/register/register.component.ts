import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { CommonModule } from '@angular/common';
import { User } from '../deatails/model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = { userid: 0, username: '', password: '' };
  users: User[] = [];
  message: string = "";

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  saveUser(): void {
    this.service.saveUser(this.user).subscribe(
      response => {
        response;
        this.getAllUsers(); // Refresh user list on success
      },
      error => {
        console.error('Error saving user:', error);
        // Handle error here (e.g., display an error message to the user)
      }
    );
  }
  
  

  getAllUsers(): void {
    this.service.getAllUsers().subscribe(
     ( userArray :any)=> this.users = userArray,
      
    );
  }
  


  getUser() {
    this.service.getUser(this.user.userid).subscribe(
      (userObject:any) => this.user = userObject
    );
  }

  deleteUser(): void {
    this.service.deleteUser(this.user.userid).subscribe(
      response => {
        this.message = response;
        this.getAllUsers();
      }
    );
  }

}


