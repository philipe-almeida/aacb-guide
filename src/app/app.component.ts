import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main class="app-main" >
  <div class="wrapper">
    <app-header></app-header>
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  </div>
</main>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
