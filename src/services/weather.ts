import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { api } from './config';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class WeatherProvider {
  apiKey = '1e4a0bdb251c64e4';
  url: string;
  queryNotFound: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/'
  }

  getWeather(state, city): Observable<any> {
    return this.http.get(this.url + state + '/' + city + '.json').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  // Private
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
