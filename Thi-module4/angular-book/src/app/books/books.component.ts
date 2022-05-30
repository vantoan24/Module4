import { Component, OnInit } from '@angular/core';
import { Book } from '../../books';
import { BookService } from '../../book.service';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  count:number = 0;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAll().subscribe(books =>{
      this.books = books;
      this.count = this.books.length;
    })
  }
  // check(){
  //   const controls = this.bookForm.controls;
  //   const invalidArr = [];
  //   const validArr = [];
  //   for (const count in controls) {
  //     if (controls[count].status === 'INVALID') {
  //        invalidArr.push(count);
  //     }else{
  //       validArr.push(count);
  //     }
  //   }
  //   console.log(`valid count : ${validArr.length}`)
  //   console.log(`invalid count : ${invalidArr.length}`)
  // }

}
