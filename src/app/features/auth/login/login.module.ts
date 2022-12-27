import {NgModule} from '@angular/core';
import {LoginComponent} from '@app/features/auth/login/login.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffects} from '@app/features/auth/login/store/login.effects';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        NzFormModule,
        NzButtonModule,
        NzInputModule,
        // EffectsModule.forFeature([LoginEffects]),
        CommonModule
    ],
    declarations: [
    LoginComponent
  ],
    providers: []
})
export default class LoginModule {}
