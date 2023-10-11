// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent {

// }
import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  // providers: [Renderer2],
})
export class MenuComponent implements OnInit {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement){
    let item = this.el.nativeElement.querySelector('li');

    alert(item);
  }
}

