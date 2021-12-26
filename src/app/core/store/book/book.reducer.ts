import { createReducer, on } from '@ngrx/store';
import {BookState} from '../../models/book.state';
import * as bookActions from 'src/app/core/store/book/book.action';

const initialState: BookState = {
  items: [],
  currentItem: null,
  status: 'idle',
  error: '',
  sort: null,
};

export const BookReducer = createReducer(
  initialState,
  on(bookActions.getBooks, state => ({...state, status: 'loading'})),
  on(bookActions.getBookSuccess, (state, {books}) => ({...state, status: 'idle', items: books})),
  on(bookActions.getBookFailed, (state, {error}) => ({...state, status: 'idle', error}))
);
