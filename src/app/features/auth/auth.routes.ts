import {Routes} from '@angular/router';
import {AuthComponent} from '@app/features/auth/auth.component';
import {LoginComponent} from '@app/features/auth/login/login.component';
import {RegisterComponent} from '@app/features/auth/register/register.component';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
            },
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
    }
];
