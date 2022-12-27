import * as CONST from '@core/constants';
import {createReducer, on, Action} from '@ngrx/store';
import {login, logInSuccess, loginFailure} from '@app/features/auth/login/store/login.actions';
import {LoginStateModel} from '@app/features/auth/login/login.model';

// update state
export const loginInitState: LoginStateModel = {
    loading: false,
    isLogin: false,
    error: null,
    data: JSON.parse(localStorage.getItem(CONST.LocalStorage.LOGIN_INFO))
};

const reducer = createReducer(
    // init state login
    loginInitState,
    on(login, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    // update state when login success
    on(logInSuccess, (state) => ({
        ...state,
        loading: false,
    })),
    // update state when login fail
    on(loginFailure, (state) => ({
        ...state,
        loading: false,
    })),

);

export function loginReducer(state: LoginStateModel, action: Action): LoginStateModel {
    return reducer(state, action);
}
