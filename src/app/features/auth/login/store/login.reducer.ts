import { LoginStateModel } from '@app/features/auth/login/login-state.model';
import * as CONST from '@core/constants';
import { createReducer, on, Action } from '@ngrx/store';
import { login, logInSuccess, loginFailure } from '@app/features/auth/login/store/login.actions';

export const loginInitState: LoginStateModel = {
    loading: false,
    isLogin: false,
    error: null,
    data: JSON.parse(localStorage.getItem(CONST.LocalStorage.LOGIN_INFO))
}

const reducer = createReducer(
    loginInitState,

    on(login, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(logInSuccess, (state) => ({
        ...state,
        loading: false,
    })),

    on(loginFailure, (state) => ({
        ...state,
        loading: false,
    }))
)

export function loginReducer(state: LoginStateModel, action: Action): LoginStateModel {
    return reducer(state, action);
}
