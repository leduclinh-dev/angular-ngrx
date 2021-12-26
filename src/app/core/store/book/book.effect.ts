import {Injectable} from '@angular/core';
import {BookService} from 'src/app/core/services/book.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as bookActions from 'src/app/core/store/book/book.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BookEffect {
    constructor(private actions$: Actions,
                private bookService: BookService) {}
  loadBook = createEffect(() => this.actions$.pipe(
    ofType(bookActions.getBooks),
    mergeMap(() => this.bookService.getBooks()),
    map(books => bookActions.getBookSuccess({ books })),
    catchError(error => of(bookActions.getBookFailed({ error })))
  ));
}
