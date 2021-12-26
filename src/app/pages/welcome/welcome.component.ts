import { Component, OnInit } from '@angular/core';
import { Book } from '../../core/models/book.model';
import { Store } from '@ngrx/store';
import { BookState } from '../../core/models/book.state';
import {getBooks} from 'src/app/core/store/book/book.action';
import {bookSelector, bookStatusSelector} from 'src/app/core/store/book/book.selector';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  books: Book[] = [];
  isLoading: 'idle' | 'loading' | 'error' = 'idle';
  constructor(private store: Store<BookState>) { }

  ngOnInit(): void {
    this.store.dispatch(getBooks());
    this.store.select(bookSelector).subscribe(res => this.books = res);
    this.store.select(bookStatusSelector).subscribe(res => this.isLoading = res);
  }

  onClick(): void {

  }

}
