import {createAction, props} from '@ngrx/store';
import {LoginResModel, LoginReqModel} from '@app/features/auth/login/login.model';


// action login request
export const login = createAction('[auth] Login', props<LoginReqModel>());

// login success
export const logInSuccess = createAction('[auth] Login Success');

// login fail
export const loginFailure = createAction(
    '[auth] Login Failure',
    props<LoginResModel>()
);
