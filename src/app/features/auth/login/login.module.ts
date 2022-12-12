import {NgModule} from '@angular/core';
import {LoginComponent} from '@app/features/auth/login/login.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';

@NgModule({
    imports: [
        NzFormModule,
        NzButtonModule,
        NzInputModule
    ],
    declarations: [
    LoginComponent
  ],
    providers: []
})
export default class LoginModule {}
