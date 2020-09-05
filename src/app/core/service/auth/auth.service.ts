import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  cretareUser(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  hasUser() {
    return this.fireAuth.authState;
  }

}
