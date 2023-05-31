import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private render2: Renderer2){  }
  
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  ngOnInit(): void {
    
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
}
