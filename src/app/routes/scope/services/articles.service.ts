import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ArticlesService {
    constructor(private httpClient: HttpClient) { }
    
    loadArticle(url): Observable<any>{
        return this.httpClient.get(url).catch((err: any) => {
            return Observable.throw(err);
        });
    }
}