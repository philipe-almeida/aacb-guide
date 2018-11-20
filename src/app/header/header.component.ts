import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <header class="wrapper-header"  >
    <div class="main-header" [ngClass]="{'secondary-scheme' : defaultColor}">
      <div class="container">
        <nav>
          <ul>
            <li class="navSection brand">
              <a routerLink="" class="link-brand" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
              aria-label="AACB Guide HomePage">
                <h1 class="logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.191 61.44"> <defs> <style> .cls-1 { fill: #655efe; } .cls-2 { fill: #fff; font-size: 32px; } .cls-2, .cls-3 { font-family: Arial-BoldMT, Arial; font-weight: 700; } .cls-3 { fill: #f58d00; font-size: 43px; } </style> </defs> <g id="Group_28" data-name="Group 28" transform="translate(0 0)"> <rect id="Rectangle_22" data-name="Rectangle 22" class="cls-1" width="60.191" height="60.191" rx="10"/> <text id="B" class="cls-2" transform="translate(27.678 53.379)"><tspan x="0" y="0">B</tspan></text> <text id="A" class="cls-2" transform="translate(7.176 29.706)"><tspan x="0" y="0">A</tspan></text> <text id="A-2" data-name="A" class="cls-2" transform="translate(27.696 29.706)"><tspan x="0" y="0">A</tspan></text> <text id="_" data-name="&lt;" class="cls-3" transform="translate(5.81 52.44)"><tspan x="0" y="0">&lt;</tspan></text> </g> </svg>
                  <span class="title">Guide</span>
                </h1>
              </a>
            </li>

            <li class="navSection primary">
              <a class="item"  routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
              <a class="item"  routerLink="semantic" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Semântica </a>
              <a class="item" routerLink="sample" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Exemplos </a>
              <!-- a class="item" routerLink="knowledge" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Conhecimento </a -->
              <!-- a class="item">Sobre </a -->
            </li>

            <li class="navSection mobile">
              <a class="item mobile-menu">
                <h2>
                Menu
                </h2>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </div>



  </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  logoColor: string;
  showNav: boolean;
  defaultColor: boolean;

  constructor(
    private router:  Router
  ) {
    this.showNav = false;
    this.defaultColor = false;
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )

  }

  ngOnInit() {
  }

  handleRouteChange = () => {
    console.log(this.router.url);
    if (this.router.url !== '/' && this.router.url !== '/semantic' && this.router.url !== '/sample') {
      this.defaultColor = true;
    } else {
      this.defaultColor = false;
    }
    // if (this.router.url.includes('some_key_part_of_url') {
    //  do what ever you want to do with your content...
    // }
  }

}
