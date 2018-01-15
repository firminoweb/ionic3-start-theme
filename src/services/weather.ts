import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '1e4a0bdb251c64e4';
  url: string;
  queryNotFound: string;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q/'
  }

  getWeather(state, city) {
    return this.http.get(this.url + state + '/' + city + '.json').map(res => res);
  }
}