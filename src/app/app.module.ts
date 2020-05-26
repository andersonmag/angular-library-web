import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BookInfoComponent } from './component/book-info/book-info.component';
import { BookListComponent } from './component/book-list/book-list.component'
import { FooterComponent } from './component/template/footer/footer.component';
import { HeaderComponent } from './component/template/header/header.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NavComponent } from './component/template/nav/nav.component';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent,
    BookListComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
