import { BookListComponent } from './component/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookInfoComponent } from './component/book-info/book-info.component';

const routes: Routes = [
  {
    path: '', component: BookListComponent
  },
  {
    path: 'book/:id', component: BookInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }