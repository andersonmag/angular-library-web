import { RequestInterceptor } from './service/request.interceptor';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BookInfoComponent } from './component/book/book-info/book-info.component';
import { BookListComponent } from './component/book/book-list/book-list.component'
import { FooterComponent } from './component/shared/template/footer/footer.component';
import { HeaderComponent } from './component/shared/template/header/header.component';
import { NavBookComponent } from './component/shared/template/nav/navBook.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { BookCategoriaComponent } from './component/book/book-categoria/book-categoria.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { BookSearchComponent } from './component/book/book-search/book-search.component';
import { CartViewComponent } from './component/cart/cart-view/cart-view.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { NavUserComponent } from './component/shared/template/nav/nav-user.component';
import { PedidosComponent } from './component/user/orders/pedidos.component';
import { MinhaContaComponent } from './component/user/my-account/minha-conta.component';
import { LoaderComponent } from './component/shared/loader/loader.component';
import { MessageErrorFormComponent } from './component/shared/message-error-form/message-error-form.component';
import { CardComponent } from './component/shared/card/card.component';
import { ImageLoadingComponent } from './component/shared/image-loading/image-loading.component';
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
    LoaderComponent,
    CardComponent,
    MessageErrorFormComponent,
    ImageLoadingComponent
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
