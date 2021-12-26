import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';
import * as TYPES from 'src/app/core/store/book/book.types';

export const getBooks = createAction(TYPES.GET_BOOKS);
export const getBookSuccess = createAction(TYPES.GET_BOOK_SUCCESS, props<{books: Book[]}>());
export const getBookFailed = createAction(TYPES.GET_BOOK_FAILED, props<{error?: string}>());
