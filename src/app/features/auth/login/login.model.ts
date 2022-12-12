export interface LoginResModel {
    accessToken: string;
    refreshToken: string;
    name: string;
}
export interface LoginReqModel {
    username: string;
    password: string;
}
export interface LoginStateModel {
    loading: boolean;
    isLogin: boolean;
    error: string;
    data: LoginResModel
}
