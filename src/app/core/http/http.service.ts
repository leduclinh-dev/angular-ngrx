import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '@src/environments/environment.prod';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import * as CONST from '@core/constants'
export class HttpService {

    api = CONST.ApiURI

    constructor(
        private _httpClient: HttpClient,
    ) {}

    protected get headers() {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + 'token');
        return headers;
    }

    protected get(relativeUrl: string): Observable<any> {
        const url = environment.baseUrl + relativeUrl

        return this._httpClient.get(url, {
            headers: this.headers
        }).pipe(
            catchError(error => throwError(error.message || error))
        );
    }

    protected post(relativeUrl: string, data: any): Observable<any> {
        const url =  environment.baseUrl + relativeUrl;

        return this._httpClient.post(url, data, {
            headers: this.headers
        }).pipe(
            catchError(error => throwError(error.message || error))
        );
    }

    protected put(relativeUrl: string, data: any): Observable<any> {
        const url =  environment.baseUrl + relativeUrl;

        return this._httpClient.put(url, data, {
            headers: this.headers
        }).pipe(
            catchError(error => throwError(error.message || error))
        );
    }

    protected delete(relativeUrl: string): Observable<any> {
        const url =  environment.baseUrl + relativeUrl;

        return this._httpClient.delete(url, {
            headers: this.headers
        }).pipe(
            catchError(error => throwError(error.message || error))
        );
    }
}
