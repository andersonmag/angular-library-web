import { RequestInterceptor } from './service/request.interceptor';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BookInfoComponent } from './component/book-info/book-info.component';
import { BookListComponent } from './component/book-list/book-list.component'
import { FooterComponent } from './component/template/footer/footer.component';
import { HeaderComponent } from './component/template/header/header.component';
import { NavBookComponent } from './component/template/nav/navBook.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { BookCategoriaComponent } from './component/book-categoria/book-categoria.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { BookSearchComponent } from './component/book-search/book-search.component';
import { CartViewComponent } from './component/cart-view/cart-view.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { NavUserComponent } from './component/template/nav/nav-user.component';
import { PedidosComponent } from './component/user/pedidos/pedidos.component';
import { MinhaContaComponent } from './component/user/minha-conta/minha-conta.component';
import { LoaderComponent } from './component/loader/loader.component';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent,
    BookListComponent,
    FooterComponent,
    HeaderComponent,
    NavBookComponent,
    BookCategoriaComponent,
    BookSearchComponent,
    CartViewComponent,
    LoginComponent,
    RegisterComponent,
    NavUserComponent,
    PedidosComponent,
    MinhaContaComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: true,
    }),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
