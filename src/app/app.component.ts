import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swal from 'sweetalert2';
// declare function greet(): void;
// sidebar
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform:'translateX(-570%)',
          // 'translate3d(0,0,0)'
        })
      ),
      state(
        'out',
        style({
          transform:'translateX(-450%)' ,
          // 'translate3d(50%, 0, 0)'
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
  
})
export class AppComponent {
  // name = 'Angular';

  menuState: string = 'in';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}




