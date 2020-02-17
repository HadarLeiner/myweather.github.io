import { Component, OnInit, Input } from '@angular/core';
import { ServiceWeatherService } from '../../service/service-weather.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  locationsFavorites;
  //array that came rom main and loop the loction into div 
  constructor(private _WeatherService: ServiceWeatherService) { }

  ngOnInit() {
    this._WeatherService.currentFavoritesArr.subscribe(locationsFavorites =>
      this.locationsFavorites = locationsFavorites)
  }

}
