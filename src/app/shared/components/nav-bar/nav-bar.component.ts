import { Component } from '@angular/core';
import {Link} from './models/Link.model';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
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
          title: 'Binding',
          url: '/demo/binding',
          children: [],
          isVisible: true
        },
        {
          // pipe ne doit pas apparaitre dans la navigation
          title: 'Pipes',
          url: '/demo/pipes',
          children: [],
          isVisible: false
        }
      ],
      isVisible: true
    }
  ]
}
