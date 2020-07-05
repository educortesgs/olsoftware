import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.autenticado()) {
      return true; // Usuario autenticado
    }
    else{
    // usuario sin acceso
    this.router.navigate(['login']);
    return false;
    }
  }
  public autenticado(){
    // validacion de usuario autenticado
    const expira = JSON.parse(localStorage.getItem('loggedin') || 'false');
    console.log(expira);
    return expira;
  }
}
