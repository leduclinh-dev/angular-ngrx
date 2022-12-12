import { createAction, props } from '@ngrx/store';
import { LoginModel } from '@app/features/auth/login/login.model';
import { LoginRequestModel } from '@app/features/auth/login/login-request.model';


export const login = createAction('[auth] Login', props<LoginRequestModel>());

export const logInSuccess = createAction('[auth] Login Success', props<{data: LoginModel}>());

export const loginFailure = createAction(
    '[auth] Login Failure',
    props<any>()
);
