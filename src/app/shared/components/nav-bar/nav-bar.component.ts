import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Link } from './models/Link.model';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  links: Link[] = [
    {
      title: 'Home',
      url: '/',
      children: [],
      isVisible: true
    },
    {
      title: 'Demo',
      children: [
        {
          title: 'Composant',
          url: '/demo/',
          isVisible: true
        },
        {
          title: 'Binding',
          url: '/demo/binding',
          isVisible: true
        },
        {
          // pipe ne doit pas apparaitre dans la navigation car isVisible est à false
          title: 'Pipes',
          url: '/demo/pipes',
          isVisible: false
        },
        {
          title: 'Directives',
          url: '/demo/directive',
          isVisible: true
        },
        {
          title: 'input & ouput',
          url: '/demo/input-output',
          isVisible: true
        },
        {
          title: 'Service & injection',
          url: '/demo/service',
          isVisible: true
        },
        {
          title: 'Formulaires',
          url: '/demo/formulaire',
          isVisible: true
        },
        {
          title: "Routing",
          url: "/demo/routing",
          isVisible: true
        },
        {
          title: 'Observables',
          url: '/demo/observables',
          isVisible: true
        },
        {
          title: 'HttpClient',
          url: '/demo/http-client',
          isVisible: true
        }
      ],
      isVisible: true
    },
    {
      title: 'Exo',
      children: [
        {
          title: "Chronometre",
          url: "/exo/chrono",
          isVisible: true
        },
        {
          title: "Shopping",
          url: "/exo/shopping",
          isVisible: true
        },
        {
          title: "Shopping avec service",
          url: "/exo/shopping-service",
          isVisible: true
        },
        {
          title: "Formulaire",
          url: "/exo/formulaire",
          isVisible: true
        },
        {
          title: "CRUD",
          url: "/exo/crud",
          isVisible: true
        }
      ],
      isVisible: true
    }
  ];

  isConnected: boolean = false;

  constructor (private _authService: AuthService) { }

  ngOnInit (): void {
    // Subject
    // this.isConnected = this._authService.isConnected;
    // this._authService.authSubject$.subscribe((value) => this.isConnected = value)

    // BehaviorSubject
    this._authService.authBehaviorSubject$.subscribe((value) => this.isConnected = value);
  }
}
