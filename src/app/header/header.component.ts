import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="wrapper-header">
  <div class="main-header">
    <div class="container">
      <div class="wrapper-content">
        <div class="nav-actions">
          <button class="nav-btn" (click)="toggleNav()" role="button" type="button"> </button>
          <div class="brand" [routerLink]="['']">
          </div>
        </div>

        <div class="extra-actions">
          <div class="options">
            <div class="item app_name">
              <h1 class="title">Painel de Risco</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav role="nav" class="main-nav" *ngIf="showNav" [ngClass]="{ 'active': navStatus } ">
    <ul>
      <li><a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="toggleNav('F')"
      aria-label="dashboaard page "><span class="icon home "></span><span class="title">Home</span></a></li>
      <!-- li><a routerLink="pipeline" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" 
      (click)="toggleNav('F')" aria-label="services page"><span class="icon admin"></span><span class="title">Admin</span></a></li -->
    </ul>
</nav>
</header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  logoColor: string;
  showNav: boolean;
  navStatus: boolean;

  constructor() {
    this.showNav = false;
    this.logoColor = '#fff';
    this.navStatus = false;
  }

  ngOnInit() {
  }

  getNavStatus($event){
    this.navStatus = $event;
  }

  toggleNav(status = null) {
    if (status === 'F') {
      this.navStatus = false; return;
    }
    this.navStatus = !this.navStatus;
  }

}
