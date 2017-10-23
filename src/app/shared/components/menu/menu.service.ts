import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MenuService {
    constructor(private httpClient: HttpClient) { }

    loadMenu(url: string): Observable<any> {
        return this.httpClient.get(url).catch((err: any) => {
            return Observable.throw(err);
        });
    }


    setSelected(data, url: string) {
        // if (!url) { return; }
        _.forEach(data, (item) => {
            item.selected = false;
        });
        // console.log(_.find(data, function (o) { return o.path === url; }));
        
        if (_.find(data, function (o) { return o.path === url; }) === undefined) {
            data[0].selected = true;
        } else {
            _.find(data, function (o) { return o.path === url; }).selected = true;

        }
    }
}
