import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BookState} from '../../models/book.state';


const featureBook = createFeatureSelector<BookState>('feature_book');
export const bookSelector = createSelector(featureBook, state => state.items);
export const currentBookSelector = createSelector(featureBook, state => state.currentItem);
export const bookStatusSelector = createSelector(featureBook, state => state.status);
