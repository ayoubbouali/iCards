import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = null

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authenticated().subscribe( (auth) => this.user = auth )
  }

  signOut() {
    this.authService.logout()
    .then( (res) => { this.router.navigate(['/login']) }  )
    .catch( (err) => { 
      console.error(err.message)
     }  )
  }

}
