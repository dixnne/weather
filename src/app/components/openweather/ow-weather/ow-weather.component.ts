import { Component } from '@angular/core';
import { OpenweatherService } from '../../../shared/openweather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ow-weather',
  standalone: true,
  imports: [],
  templateUrl: './ow-weather.component.html',
  styleUrl: './ow-weather.component.css'
})
export class OwWeatherComponent {

  state: string = "";

  constructor(private openweatherService: OpenweatherService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.state = params["state"];
      this.openweatherService.getWeather(this.state)
    });
  }


}
