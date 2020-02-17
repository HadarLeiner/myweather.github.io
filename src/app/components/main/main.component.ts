import { Component, OnInit } from '@angular/core';
import { ServiceWeatherService } from '../../service/service-weather.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Forecasts: any;
  Current: any;
  location: String;
  locationKey = "215854";
  locationsFavorites;
  citiesArr;
  constructor(private _WeatherService: ServiceWeatherService) { }

  ngOnInit() {
    this._WeatherService.currentFavoritesArr.subscribe(location =>
      this.location = location)
    this.location = "Tel Aviv";

    this._WeatherService.getCurrent(this.locationKey).subscribe((d) => {
      this.Current = d[0].Temperature.Imperial.Value;
    });;

    this._WeatherService.getForecasts(this.locationKey).subscribe((d) => {
      this.Forecasts = Object.values(d)[1];
    });;
    this.citiesArr = [];
  }

  auto(newValue) {
    this.location = newValue;
    this._WeatherService.getAuto(this.location).subscribe((dx) => {
      for (let name in dx) {
        console.log(dx[name].LocalizedName)
        this.citiesArr.push(dx[name].LocalizedName)
      }
      console.log(this.citiesArr)
      this.Current = dx[0];
      this.locationKey = this.Current.Key;
    });
  }
  getWeather() {
    this._WeatherService.getCurrent(this.locationKey).subscribe((d) => {
      this.Current = d[0].Temperature.Imperial.Value;

    });
  }
  favorites() {
    this.locationsFavorites.push(this.location);
    this._WeatherService.changeFavoritesArr(this.locationsFavorites)
  }
}
