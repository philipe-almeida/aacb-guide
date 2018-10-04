import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { SemanticComponent } from './semantic/semantic.component';
import { SampleComponent } from './sample/sample.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { AboutComponent } from './about/about.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NotFoundComponent,
      HeaderComponent,
      SemanticComponent,
      SampleComponent,
      KnowledgeComponent,
      AboutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
