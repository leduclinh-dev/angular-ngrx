import {NgModule} from '@angular/core';
import {AuthComponent} from '@app/features/auth/auth.component';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from '@app/features/auth/auth.routes';
import LoginModule from '@app/features/auth/login/login.module';
import {StoreModule} from '@ngrx/store';
import {authFeatureKey, AUTH_REDUCER_TOKEN} from '@app/features/auth/store/auth.reducer';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(AUTH_ROUTES),
        StoreModule.forFeature(authFeatureKey, AUTH_REDUCER_TOKEN),
        LoginModule
    ],
    declarations: [
        AuthComponent,
    ],
    providers: []
})
export default class AuthModule {
}
