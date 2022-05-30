import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookShowComponent } from './book-show/book-show.component';


const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'book-add', component: BookAddComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent},
  {path: 'book-show/:id', component: BookShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
