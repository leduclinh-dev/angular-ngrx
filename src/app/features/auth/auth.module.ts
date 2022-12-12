import {NgModule} from '@angular/core';
import {AuthComponent} from '@app/features/auth/auth.component';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from '@app/features/auth/auth.routes';
import LoginModule from '@app/features/auth/login/login.module';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(AUTH_ROUTES),
        LoginModule
    ],
    declarations: [
        AuthComponent,
    ],
    providers: []
})
export default class AuthModule {
}
