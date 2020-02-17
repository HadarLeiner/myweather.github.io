import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceWeatherService {

  apiUrlCurrent: string = "http://dataservice.accuweather.com/currentconditions/v1/";
  apiUrlForecasts: string = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  apiUrlAuto: string = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=prFxwC8zy97eFfPT9hRI5eAUI965s7Ff&q=";

  private favoritesArr = new BehaviorSubject('no have favorite city');
  currentFavoritesArr = this.favoritesArr.asObservable();

  constructor(private _http: HttpClient) { }

  changeFavoritesArr(favorite) {
    this.favoritesArr.next(favorite)
  }

  getAuto(location) {
    return this._http.get(this.apiUrlAuto + location)
  }
  getForecasts(locationKey) {
    return this._http.get(this.apiUrlForecasts + locationKey + "?apikey=prFxwC8zy97eFfPT9hRI5eAUI965s7Ff")
  }
  getCurrent(locationKey) {
    return this._http.get(this.apiUrlCurrent + locationKey + "?apikey=prFxwC8zy97eFfPT9hRI5eAUI965s7Ff")
  }


}

