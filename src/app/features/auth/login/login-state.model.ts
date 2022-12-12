import { LoginModel } from '@app/features/auth/login/login.model';

export interface LoginStateModel {
    loading: boolean;
    isLogin: boolean;
    error: string;
    data: LoginModel
}
