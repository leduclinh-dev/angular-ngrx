import {Injectable} from '@angular/core';
import {HttpService} from '@app/core/http/http.service';
import {Observable} from 'rxjs';
import {LoginReqModel, LoginResModel} from '@app/features/auth/login/login.model';

@Injectable({providedIn: 'root'})
export class AuthService extends HttpService {

    login(req: LoginReqModel): Observable<{ data: LoginResModel }> {
        return this.post(this.api.LOGIN, req);
    }
}
