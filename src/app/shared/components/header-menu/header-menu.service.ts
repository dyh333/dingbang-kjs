import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const menu_datastruct = './assets/config/menu.config.json';

@Injectable()
export class HeaderMenuService {
  constructor(private _http: HttpClient) { }

  loadMenu(): Observable<any> {
    return this._http.get(menu_datastruct);
  }
}
