import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardloginService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    if (this.autenticado()) {
      console.log("Bloqueado");
      this.router.navigate(['home']);
      return false;
    }
    else{
      //console.log("paso");
     return true;
    }
  }
  public autenticado(){
      const expira = JSON.parse(localStorage.getItem('loggedin')|| 'false');
      console.log(expira);
      return expira;
    }
}
