import {Book} from './book.model';

export interface BookState {
  items: Book[];
  currentItem: Book;
  status: 'idle' | 'loading' | 'error';
  error?: string;
  sort: 'asc' | 'desc' | null;
}
