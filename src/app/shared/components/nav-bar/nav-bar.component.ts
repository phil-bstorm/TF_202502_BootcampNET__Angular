import {Component} from '@angular/core';
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
        }
      ],
      isVisible: true
    }
  ]
}
