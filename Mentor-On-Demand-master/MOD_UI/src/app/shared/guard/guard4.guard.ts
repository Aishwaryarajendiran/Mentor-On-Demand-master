import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: "root"
})
export class Guard4Guard implements CanActivate {
  data: string;
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    // user

    this.data = localStorage.getItem("role");
    console.log(this.data);

    if (this.auth.isLoggedIn() && this.data == "3") {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }

  }
}
