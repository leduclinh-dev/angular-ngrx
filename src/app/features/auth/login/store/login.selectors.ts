// select state
import {authFeatureKey} from '@app/features/auth/store/auth.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthStateModel} from '@app/features/auth/auth.model';

export const selectLoginSate = createFeatureSelector<AuthStateModel>(authFeatureKey);
export const isLogin = createSelector(selectLoginSate, (state) => state.login.isLogin)

export const isLoading = createSelector(selectLoginSate, (state) => state.login.loading)

export const isMessageError = createSelector(selectLoginSate, (state) => state.login.error)

export const loginResponse = createSelector(selectLoginSate, (state) => state.login.data)
