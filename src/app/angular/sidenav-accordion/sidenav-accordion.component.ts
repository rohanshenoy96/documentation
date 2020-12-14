import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-accordion',
  templateUrl: './sidenav-accordion.component.html',
  styleUrls: ['./sidenav-accordion.component.scss']
})
export class SidenavAccordionComponent{
  @Input() data: any;
  toggle: boolean = false;
  constructor(private router: Router) {}

  toggleAccordion(): void {
    this.toggle = !this.toggle;
  }

  navigateToRoute(route: string) {
    this.router.navigate([route])
  }

}
