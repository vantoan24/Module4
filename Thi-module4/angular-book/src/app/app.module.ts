import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookShowComponent } from './book-show/book-show.component';

@NgModule({
  declarations: [					
    AppComponent,
      BooksComponent,
      BookAddComponent,
      BookEditComponent,
      BookDeleteComponent,
      BookShowComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
