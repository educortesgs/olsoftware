import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit {

  
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc:AuthService, private router:Router) { }
  public myClass: boolean = true;

  async ngOnInit(){

  }

  ocultarMenu():void{
    this.myClass= !this.myClass
  }

  async onLogout(){
    try {
      await this.authSvc.logout();
      localStorage.removeItem('loggedin');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
  
  redireccionar(){
    // this.router.navigate(['/']);
  }
}
