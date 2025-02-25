import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: false,
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent implements OnInit{
    ngOnInit(): void {
      console.log("Hello world from OnInit");
    }
}
