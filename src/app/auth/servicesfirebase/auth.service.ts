import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';


@Injectable()
export class AuthService {
  public user:User;


  constructor(
    public afAuth:AngularFireAuth
  ) { }

  async login(user:string, password:string){
    try{const result = await this.afAuth.signInWithEmailAndPassword(user, password);
      return result;
    }catch(error){
      console.log(error);
    }
  }

  async logout(){
    try {
      await this.afAuth.signOut();
      //Aqui se borra todo y se redirige
    } catch (error) {
      console.log(error);
    }
  }
}
