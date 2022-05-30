import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../../books';


@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  id:any = 0;
  book !: Book;
  constructor(private bookService: BookService,private Router: Router,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit():void {
    this.ActivatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.bookService.find(id).subscribe((book)=>{
        this.book = book;
      })
    })
  }
 yesBook() {
    this.bookService.destroy(this.id).subscribe(()=> {
      this.Router.navigate(['/']);
      alert('Xóa sách thành công');
    },(e:any)=>{
      console.log(e);
    })
 }
 noBook() {
  this.Router.navigate(['/']);
 }
}
