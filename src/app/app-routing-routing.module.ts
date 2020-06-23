import { BookSearchComponent } from './component/book-search/book-search.component';
import { BookCategoriaComponent } from './component/book-categoria/book-categoria.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookInfoComponent } from './component/book-info/book-info.component';
import { CartViewComponent } from './component/cart-view/cart-view.component';

const routes: Routes = [
  {
    path: '', component: BookListComponent
  },
  {
    path: 'book/:link', component: BookInfoComponent
  },
  {
    path: 'book/categoria/:link', component: BookCategoriaComponent
  },
  {
    path: 'book/search/:q', component: BookSearchComponent
  },
  {
    path: 'cart-detalhes', component: CartViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
