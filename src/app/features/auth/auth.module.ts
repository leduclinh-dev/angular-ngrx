import {NgModule} from '@angular/core';
import {AuthComponent} from '@app/features/auth/auth.component';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from '@app/features/auth/auth.routes';
import LoginModule from '@app/features/auth/login/login.module';
import {StoreModule} from '@ngrx/store';
import {AUTH_REDUCER_TOKEN, authFeatureKey, getAuthReducers} from '@app/features/auth/store/auth.reducer';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(AUTH_ROUTES),
        LoginModule,
        StoreModule.forFeature(authFeatureKey, AUTH_REDUCER_TOKEN),
        EffectsModule.forFeature([])
    ],
    declarations: [
        AuthComponent,
    ],
    providers: [
        { provide: AUTH_REDUCER_TOKEN, useFactory: getAuthReducers },
    ]
})
export default class AuthModule {
}
