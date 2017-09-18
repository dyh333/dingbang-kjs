import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const menu_datastruct = './assets/config/menu_header.config.json';

@Injectable()
export class HeaderMenuService {
  constructor(private _http: HttpClient) { }

  loadMenu(): Observable<any> {
    return this._http.get(menu_datastruct);
  }
}
