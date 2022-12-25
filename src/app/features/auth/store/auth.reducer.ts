import {ActionReducerMap} from '@ngrx/store';
import {loginReducer} from '@app/features/auth/login/store/login.reducer';
import {AuthStateModel} from '@app/features/auth/auth.model';
import {InjectionToken} from '@angular/core';

export const authFeatureKey = 'auth';

export const AUTH_REDUCER_TOKEN = new InjectionToken<
    ActionReducerMap<AuthStateModel>
>('Auth Reducers');
export function getAuthReducers(): ActionReducerMap<AuthStateModel> {
    return {
        login: loginReducer,
    };
}
