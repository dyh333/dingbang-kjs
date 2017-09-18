import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const card_data = './assets/config/scope.config.json';

@Injectable()
export class CardService {

  constructor(private _http: HttpClient) { }

  loadCard(): Observable<any> {
    return this._http.get(card_data);
  }
}
