import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-observables',
  standalone: false,
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements OnInit, OnDestroy {
  
  isConnected!: boolean;
  mySubscription!: Subscription;

  constructor(private _authService: AuthService){}
  
  ngOnInit (): void {
    // Subject
    // this.isConnected = this._authService.isConnected;
    // this._authService.authSubject$.subscribe((value) => this.isConnected = value)
    
    // BehaviorSubject
    this.mySubscription = this._authService.authBehaviorSubject$.subscribe((value) => this.isConnected = value);
  }

  ngOnDestroy (): void {
    this.mySubscription.unsubscribe();
  }
  
  login () {
    this._authService.login();
    // this.isConnected = this._authService.isConnected;
  }
  
  logout () {
    this._authService.logout();
    // this.isConnected = this._authService.isConnected;
  }

}
