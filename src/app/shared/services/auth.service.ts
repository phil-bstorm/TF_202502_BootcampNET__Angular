import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;

  // Subject
  authSubject$: Subject<boolean> = new Subject<boolean>();

  // BehaviorSubject
  authBehaviorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated);


  constructor () { }

  get isConnected (): boolean { return this.isAuthenticated; }

  login (): void {
    this.isAuthenticated = true;
    this.authSubject$.next(this.isAuthenticated);
    this.authBehaviorSubject$.next(this.isAuthenticated);
  }
  
  logout (): void {
    this.isAuthenticated = false;
    this.authSubject$.next(this.isAuthenticated);
    this.authBehaviorSubject$.next(this.isAuthenticated);
  }

  isAdmin () {
    return true;
  }

  isModo () {
    return false;
  }

  isHonorable () {
    return false;
  }

}
