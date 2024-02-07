import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

 
  constructor() {}

  @HostBinding('class.scrolled')
   isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: any) {
  const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  
  const scrollThreshold = 100;

  this.isScrolled = scrollOffset >= scrollThreshold;
}
}
