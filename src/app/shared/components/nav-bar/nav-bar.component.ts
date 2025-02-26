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
          title: 'input & ouput',
          url: '/demo/input-output',
          isVisible: true
        }
      ],
      isVisible: true
    },
    {
      title: 'Exo',
      children: [
        {
          title: "Shopping",
          url: "/exo/shopping",
          isVisible: true
        }
      ],
      isVisible: true
    }
  ]
}
