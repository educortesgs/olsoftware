import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registrosModel } from '../models/registros.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  private url = 'https://olsoftware-11db0.firebaseio.com';


  constructor( private http: HttpClient ) { }

  crearRegistro( registro:registrosModel ){
    return this.http.post(`${this.url}/registros.json`, registro).pipe(
      map( (resp: any)=>{
        registro.id = resp.name;
        return registro;
      })
    );
  }

  actualizarRegistro(registro: registrosModel){

    const registroTemp = {
      ...registro
    };
    delete registroTemp.id;
    return this.http.put(`${this.url}/registros/${registro.id}.json`, registroTemp);
  }
}
