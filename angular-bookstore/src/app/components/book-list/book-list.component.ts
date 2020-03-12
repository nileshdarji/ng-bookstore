import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  curentCategoryId: number;
    
  constructor(private _bookService: BookService, private _routeRoute: ActivatedRoute) { }

  ngOnInit() {
    this._routeRoute.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  listBooks() {
    const hasCategoryId: boolean =  this._routeRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.curentCategoryId = +this._routeRoute.snapshot.paramMap.get('id');
    } else {
      this.curentCategoryId = 1;
    }

    this._bookService.getBooks(this.curentCategoryId).subscribe(
      data => {
        this.books = data;
      }
    );
  }
}
