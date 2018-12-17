import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  register(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email, password){
    return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
  }

  authenticated(){
    return this.afAuth.user; //status 
  }

  logout(){
    return this.afAuth.auth.signOut()
  }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.afAuth.auth.signInWithPopup(provider)
  }

}
