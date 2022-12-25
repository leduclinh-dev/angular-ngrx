import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {isLogin} from '@app/features/auth/login/store/login.selectors';
import {login} from '@app/features/auth/login/store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin$ = this._store.select(isLogin)
  constructor(private _store: Store) { }

  ngOnInit(): void {
    console.log(this.isLogin$);
    const request = {
      username: '',
      password: ''
    }
    // this._store.dispatch(login(request));
  }

}
