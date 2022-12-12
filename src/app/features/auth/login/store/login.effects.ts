import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {AuthService} from '@app/features/auth/auth.service';

// call api
@Injectable()
export class LoginEffects {

    login$ = createEffect(() => this._action$.pipe(

    ));


    constructor(private _action$: Actions, private _authService: AuthService) {
    }
}
