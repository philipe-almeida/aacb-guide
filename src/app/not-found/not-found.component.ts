import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <section class="content">
  <section class="container a404">
    <h1 class="common-PageTitle">Página não encontrada</h1>
    <h2 class="common-IntroText">Desculpe, mas a página que você esta procurando não foi encontrada.</h2>
    <p class="common-BodyText">
      Você pode <a class="common-Link" routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">retornar para a página inicial.</a>
    </p>

  </section>
  </section>
  `,
  styles: [`
  .a404{
    padding: 3em 0;
  }
  h1{
    display: block;
  }
  h2{
    margin-bottom: 0.5em;
  }
  .common-PageTitle{
    display: block;
    font-size: 2em;
    margin-bottom: 1em;
  }
  
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
