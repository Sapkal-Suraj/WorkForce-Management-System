import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // To display any error messages

  constructor(private service: HttpService, private router: Router) { }

  ngOnInit(): void {
    document.body.className = "bg_background";
  }

  onSubmit(f: NgForm): void {
    if (f.valid) {
      const obj = {
        username: f.value.username,
        password: f.value.password
      };

      this.service.login(obj).subscribe(
        (response) => {
          console.log(response);
          if (response) {
            // Navigate to the home component
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = "Login failed. Please check your username and password.";
          }
        },
        (error) => {
          console.error('An error occurred during login:', error);
          this.errorMessage = "An error occurred during login. Please try again later.";
        }
      );
    } else {
      alert("Please enter a valid username and password.");
    }
  }
}
