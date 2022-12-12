import {Injectable} from '@angular/core';
import {HttpService} from '@app/core/http/http.service';
import {Observable} from 'rxjs';
import {LoginModel} from '@app/features/auth/login/login.model';
import {LoginRequestModel} from '@app/features/auth/login/login-request.model';

@Injectable({providedIn: 'root'})
export class AuthService extends HttpService {

    login(data: LoginRequestModel): Observable<{ data: LoginModel }> {
        return this.post(this.api.LOGIN, data);
    }
}
