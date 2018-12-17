import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user = null

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      
      this.authService.authenticated().subscribe( (auth) => this.user = auth )

      if(this.user) {
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }

  }
}
