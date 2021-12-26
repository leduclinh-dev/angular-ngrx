import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {BookReducer} from './store/book/book.reducer';
import {EffectsModule} from '@ngrx/effects';
import {BookEffect} from './store/book/book.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('feature_book', BookReducer),
    EffectsModule.forFeature([BookEffect])
  ]
})
export class CoreModule {}
