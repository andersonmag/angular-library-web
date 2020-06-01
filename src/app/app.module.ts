import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BookInfoComponent } from './component/book-info/book-info.component';
import { BookListComponent } from './component/book-list/book-list.component'
import { FooterComponent } from './component/template/footer/footer.component';
import { HeaderComponent } from './component/template/header/header.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NavComponent } from './component/template/nav/nav.component';
import { BookCategoriaComponent } from './component/book-categoria/book-categoria.component';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent,
    BookListComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    BookCategoriaComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
