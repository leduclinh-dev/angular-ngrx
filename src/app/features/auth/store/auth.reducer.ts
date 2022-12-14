import {ActionReducerMap} from '@ngrx/store';
import {InjectionToken} from '@angular/core';
import {AuthStateModel} from '@app/features/auth/auth.model';

export const authFeatureKey = 'auth';

export const AUTH_REDUCER_TOKEN = new InjectionToken<
    ActionReducerMap<AuthStateModel>
>('Auth Reducers');
