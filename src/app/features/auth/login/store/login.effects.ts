import { login, logInSuccess, loginFailure } from '@app/features/auth/login/store/login.actions';
import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { AuthService } from '@app/features/auth/auth.service';
import {mergeMap, switchMap} from 'rxjs/operators';
import {LoginRequestModel} from '@app/features/auth/login/login-request.model';

@Injectable()
export class LoginEffects {

    login$ = createEffect(() => this._action$.pipe(

    ))


    constructor(private _action$: Actions, private _authService: AuthService) {}
}
