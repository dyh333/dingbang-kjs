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

  setSelected(data, url: string) {
    // if (!url) { return; }
    _.forEach(data, (item) => {
      if (_.startsWith(url, item.path)) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  }
}
