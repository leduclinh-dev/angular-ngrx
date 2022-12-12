import {NgModule} from '@angular/core';
import { AuthComponent } from '@app/features/auth/auth.component';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from '@app/features/auth/auth.routes';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(AUTH_ROUTES),
    ],
    declarations: [
    AuthComponent,
  ],
    providers: []
})
export default class AuthModule {}
