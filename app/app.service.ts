import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()

export class AppService {

  constructor(private http: Http) { }

  handleResponse(res: Response): any {
    let body = res.json() || {};
    return body;
  }

  handleError(error: Response | any) {
    console.log('error', error);
  }

  httpGet(url: string) {
    return this.http
      .get(url, {})
      .map(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  httpGetById(url: string, id: string) {
    return this.http
      .get(url, {})
      .map(data => {
        data = this.handleResponse(data);
        for (let key in data['pricelist']) {
          if (data['pricelist'][key].id === id) {
            return data['pricelist'][key];
          }
        }
      })
      .catch(this.handleError.bind(this));
  }


  getPriceList() {
    return this.httpGet('./ssl.json');
  }

  getPriceById(id: string) {
    return this.httpGetById('./ssl.json', id);
  }
}


