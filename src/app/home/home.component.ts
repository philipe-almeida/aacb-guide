import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="content home">

  <section class="container">

    <!--div class="cards slider-box">
      <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/?hl=pt-br" target="_blank">
        <div class="outer-image">
          <img src="https://cdn-images-1.medium.com/max/1440/1*NzNbMXVXqw3XjG6Y294O8w.gif" alt="Illustration about accessibility">
        </div>
        <div class="body">
          <h1 class="title">Introdução a Aria</h1>
          <p class="extra-info">
            <time class="time">27 Jun</time>
            <span class="author">Google Web Fundamentals</span>
          </p>
          <p class="description">
          Até agora, incentivamos o uso de elementos HTML nativos, porque eles fornece foco, suporte a teclado e semântica incorporada, mas há momentos em que um simples layout e HTML nativo não dão conta do trabalho. </p>
        </div>
      </a>
      <nav class="navigation">
        <ul>
          <li>
            <a class="previously btn">
              <</a> </li> <li>
                <a class="next btn">></a>
          </li>
        </ul>
      </nav>
    </div-->

    <section class="wrapper-cards lg-12">

      <div class="cards solo">
        <a href="https://mashable.com/2011/04/20/design-for-visually-impaired/#9kOtWajVVPqQ" target="_blank">
          <div class="outer-image">
            <img src="./assets/img/acces_5.jpg" alt="Animate impairments people illustration smile">
          </div>
          <div class="body">
            <h1 class="title">5 maneiras de garantir que seu site seja acessível aos deficientes visuais</h1>
            <p class="extra-info">
            <time class="time">27 Jun</time>
            <span class="author">Mashable</span>
          </p>
          <p class="description">A web está repleta de dicas sobre como criar websites para usuários cegos, a maioria dos quais é voltada para tornar seu...</p>
          </div>
        </a>
       </div>
      
      <div class="cards solo">
        <a href="https://medium.com/@oieduardorabelo/10-diretrizes-para-melhorar-sua-acessibilidade-na-web-6e35844f9859" target="_blank">
          <div class="outer-image">
            <img src="./assets/img/acces_1.png" alt="Animate impairments people illustration smile">
          </div>
          <div class="body">
            <h1 class="title">10 diretrizes de acessibilidade na web</h1>
            <p class="extra-info">
            <time class="time">27 Jun</time>
            <span class="author">Eduardo Rabelo</span>
          </p>
            <p class="description">Reunimos uma lista de dez diretrizes de acessibilidade na Web que irão melhorar o acesso ao seu site ...</p>
          </div>
        </a>
      </div>

       <div class="cards solo">
        <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree?hl=pt-br" target="_blank">
          <div class="outer-image">
            <img src="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/imgs/acctree1.jpg" alt="Animate impairments people illustration smile">
          </div>
          <div class="body">
            <h1 class="title">Árvore de Acessibilidade</h1>
            <p class="extra-info">
            <time class="time">27 Jun</time>
            <span class="author">Google Web Fundamentals</span>
          </p>
            <p class="description">Imagine que você esteja construindo uma interface de usuário somente para usuários de leitores de tela...</p>
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
        <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/navigating-content?hl=pt-br" target="_blank">
          <div class="outer-image">
            <img src="https://ctools.umich.edu/access/content/public/gateway/Web-Content-screen.gif" alt="Animate impairments people illustration smile">
          </div>
          <div class="body">
            <h1 class="title">A semântica e a navegação de conteúdo</h1>
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
  styles: [``]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
