import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/servicesfirebase/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { registrosModel } from '../models/registros.model';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { RegistrosService } from '../services/registros.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit {
  
  cargando = false;
  registros: registrosModel[]=[];
  public user$: Observable<any> = this.authSvc.afAuth.user;
  registro: registrosModel = new registrosModel();

  constructor(private authSvc:AuthService, 
              private router:Router, 
              private registroService:RegistrosService) { }
  public myClass: boolean = true;

  async ngOnInit(){

    this.cargando=true;
    this.registroService.getRegistros().subscribe(resp => {
                            this.registros=resp,
                            this.cargando=false;}); 

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

  guardar( form: NgForm ){

    if(form.invalid){
      swal({
        title: "¡Error!",
        text: "Todos los campos son requeridos",
        icon: "error",
      });
      return;
    }
    swal({
      title: "Correcto",
      text: "Hecho correctamente",
      icon: "success"
    }).then((value)=>{
      form.reset();
    });

    this.registroService.crearRegistro(this.registro).subscribe(resp=>{
      console.log(resp);
      this.registro=resp;
    });
  }

  actualizar(){
    this.registroService.actualizarRegistro(this.registro).subscribe(resp=>{
      console.log(resp);
      console.log(this.registro.id);
      
    });
  }

  pruebaeditar(registro:any){
    console.log(registro);
    // this.registroService.getRegistro(registro.id).subscribe((resp:registrosModel)=>{
    //   this.registro = resp;
    //   console.log(registro);
    //   console.log(resp);
    // });

  }
  borrarRegistro(registro:registrosModel, i:number){

    

    //El maldito sweet alert no funcionaa bien ._.
    this.registros.splice(i, 1);
    this.registroService.borrarRegistro(registro.id).subscribe();
  }



  
}
