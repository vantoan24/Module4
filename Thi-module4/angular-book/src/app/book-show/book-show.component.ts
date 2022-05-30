import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from '../../book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../../books';


@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {
  id:any = 0;
  book !: Book;
  constructor(private bookService: BookService,private Router: Router,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.bookService.find(id).subscribe((book)=>{
        this.book = book;
      })
    })

}
}
