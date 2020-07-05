import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../servicesfirebase/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  recarga:Boolean = false;
  status: boolean;
  loginForm : FormGroup;

  constructor(private authSvc:AuthService, private router:Router,private _builder:FormBuilder) {
      this.loginForm = this._builder.group({
        user:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required),
      });
   }

  ngOnInit(): void {
  }

  async onLogin(){

   
      
      const {user, password} = this.loginForm.value;
      try {
        const usuario = await this.authSvc.login(user, password);
        if(usuario){
          this.recarga = true;
          //Redirecciona al homepage ya loggeado
          this.setlogin();
          setTimeout(() => {
            this.login();
            
           }, 3000);
          
        } else{
          swal({
            title: "Error!",
            text: "Faltan campos o alguno es incorrecto",
            icon: "error",
          });
        }
      } catch (error) {

        console.log(error);
      }

  }
  public login(){
    this.router.navigate(['/home']);
    this.recarga = false;
  }
  public setlogin(){ 
    this.status = true;
    localStorage.setItem('loggedin','true');
  }

}
