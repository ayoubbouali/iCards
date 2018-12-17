import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = ""
  password = ""

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createUser(){
    this.authService.register(this.email, this.password)
    .then( (res) => { this.router.navigate(['/']) } )
    .catch( (error) => console.error(error.message) )
  }

}
