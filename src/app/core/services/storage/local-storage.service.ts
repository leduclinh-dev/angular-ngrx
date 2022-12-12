import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

    public setLocalStorage(key: string, data: any): void {
        localStorage.setItem(key, data);
    }

    public getLocalStorage(key: string): any {
        return localStorage.getItem(key);
    }

    public removeLocalStorage(key: string): void {
        localStorage.removeItem(key);
    }

}
