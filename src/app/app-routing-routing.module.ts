import { GuardGuard } from './service/guard.guard';
import { PedidosComponent } from './component/user/orders/pedidos.component';
import { MinhaContaComponent } from './component/user/my-account/minha-conta.component';
import { NavUserComponent } from './component/shared/template/nav/nav-user.component';
import { NavBookComponent } from './component/shared/template/nav/navBook.component';
import { LoginComponent } from './component/user/login/login.component';
import { BookSearchComponent } from './component/book/book-search/book-search.component';
import { BookCategoriaComponent } from './component/book/book-categoria/book-categoria.component';
import { BookListComponent } from './component/book/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookInfoComponent } from './component/book/book-info/book-info.component';
import { CartViewComponent } from './component/cart/cart-view/cart-view.component';
import { RegisterComponent } from './component/user/register/register.component';

const routes: Routes = [
    {
      path: '', component: NavBookComponent, children: [
          { path: '', component: BookListComponent },
          { path: 'book/categoria/:link', component: BookCategoriaComponent },
          { path: 'book/:link', component: BookInfoComponent },
          { path: 'book/search/:q', component: BookSearchComponent },

        ]
    },
    {
      path: '', component: NavUserComponent, canActivate: [GuardGuard] , children: [
        { path:  'user/minha-conta', component: MinhaContaComponent },
        { path: 'user/meus-pedidos', component: PedidosComponent }, 
        // { path: 'user/alterar-senha'}
      ]
    },
    
  {
    path: 'cart-detalhes', component: CartViewComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: RegisterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
