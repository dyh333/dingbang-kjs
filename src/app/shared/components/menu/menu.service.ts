import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MenuService {
    constructor(private httpClient: HttpClient) { }
    
    loadMenu(url: string): Observable<any>{
        return this.httpClient.get(url).catch((err: any) => {
            return Observable.throw(err);
        });
    }
}