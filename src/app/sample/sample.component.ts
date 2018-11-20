import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <section class="content home">

  <section class="container">

    <section class="wrapper-cards lg-12">

    <div class="cards solo">
        <a href="https://mashable.com/2011/04/20/design-for-visually-impaired/#9kOtWajVVPqQ" target="_blank">
          <div class="outer-image">
            <img src="./assets/img/acces_5.jpg" alt="website presentating news of disableded childrens">  </div> <div class="body">
            <h1 class="title">5 maneiras de garantir que seu site seja acessível aos deficientes visuais</h1>
            <p class="extra-info">
            <time class="time"></time>
            <span class="author">Mashable</span>
          </p>
            <p class="description">
            A web está repleta de dicas sobre como criar websites para usuários cegos, a maioria dos quais é voltada para tornar seu...</p>
          </div>
        </a>
      </div>


      <div class="cards solo">
        <a href="https://www.abilitynet.org.uk/blog/five-golden-rules-compliant-alt-text" target="_blank">
          <div class="outer-image">
            <img src="./assets/img/acces_6.jpeg" alt="Animate impairments people illustration smile"> </div> <div class="body">
            <h1 class="title">Five golden rules for compliant alt text</h1>
            <p class="extra-info">
            <time class="time">27 Jun</time>
            <span class="author">Abilitynet</span>
          </p>
            <p class="description">Reunimos uma lista de dez diretrizes de acessibilidade na Web que irão melhorar o acesso ao seu site ...</p>
          </div>
        </a>
      </div>

       <div class="cards solo">
        <a href="http://www.clarissapeterson.com/2012/11/html5-accessibility/" target="_blank">
          <div class="outer-image">
            <img src="http://blog.edx.org/wp-content/uploads/2015/09/null-1.jpg" alt="Html5 logo">
          </div>
          <div class="body">
            <h1 class="title">Accessibility in HTML5</h1>
            <p class="extra-info">
            <time class="time">19 Nov 2012</time>
            <span class="author">Clarissa Peterson</span>
          </p>
            <p class="description">Accessibility is not a niche area of web design: everybody who works on the web needs to be interested in accessibility...</p>
          </div>
        </a>
      </div>

      <div class="cards solo">
        <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images?hl=pt-br" target="_blank">
          <div class="outer-image">
            <img src="http://mestredoadwords.com.br/wp-content/uploads/2015/12/Alt-Text.jpg" alt="Animate impairments people illustration smile">
          </div>
          <div class="body">
            <h1 class="title">
            Texto Alternativo para Imagens</h1>
            <p class="extra-info">
            <time class="time">27 Jun</time>
            <span class="author">Google Web Fundamentals</span>
          </p>
            <p class="description">As imagens são um componente importante da maioria das páginas da Web e são, naturalmente, um ponto sensível...</p>
          </div>
        </a>
      </div>

      <div class="cards solo">
        <a href="https://www.go-globe.com/blog/make-your-website-accessible-to-visually-impaired-user/" target="_blank">
          <div class="outer-image">
            <img src="https://www.go-globe.com/files/2017/04/color-blind.jpg" alt="Animate impairments people illustration smile">
          </div>
          <div class="body">
            <h1 class="title">
            Acessibilidade para deficientes visuais</h1>
            <p class="extra-info">
            <time class="time">Abr 2017</time>
            <span class="author">Go Globes</span>
          </p>
            <p class="description">Considerando que as pessoas com deficiência visual também navegam em sites, há uma grande necessidade de...</p>
          </div>
        </a>
      </div>

      <div class="cards solo">
        <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/navigating-content?hl=pt-br" target="_blank">
          <div class="outer-image">
            <img src="./assets/img/acces_7.jpeg" alt="Animate impairments people illustration smile">
          </div>
          <div class="body">
            <h1 class="title">HTML Web Accessibility Tips</h1>
            <p class="extra-info">
            <time class="time">27 Jun</time>
            <span class="author">Google Web Fundamentals</span>
          </p>
            <p class="description">Outra técnica importante no ajuste fino da experiência para usuários de tecnologia assistiva envolve garantir que apenas...</p>
          </div>
        </a>
      </div>
      

 

    </section>
  </section>

  <div class="outer-bg">
    <div class="stripe-bg">
      <div id="stripes" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</section>
  `,
  styles: []
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
