import { Component } from '@angular/core';
import { OpenweatherService } from '../../../shared/openweather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ow-weather',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './ow-weather.component.html',
  styleUrl: './ow-weather.component.css'
})
export class OwWeatherComponent {
  
  state: string = "";
  data?: any;
  weatherIcon: string = "sunny";

  constructor(private openweatherService: OpenweatherService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.state = params["state"];
      this.openweatherService.getWeather(this.state).subscribe((res: any) => {
        console.log(res);
        this.data = res;
        if (res.error) {
          Swal.fire({
            title: "Where?",
            text: "Couldn't find state",
            icon: "error"
          }).then(() => {
            this.router.navigate(['/openweather'])
          });
        } else {
          this.weatherIcon = this.getWeatherIcon(this.data.weather[0].id);
        }
      }); 
      console.log(this.data);
    });
  }

  getWeatherIcon(weather: number): string {
    switch (weather) {
      case 200: case 201: case 202: case 210: case 211: case 212: case 221: case 230: case 231: case 232:
        return "thunderstorm";
      case 500: case 501: case 502: case 503: case 504:
        return "cloudy_snowing";
      case 300: case 301: case 302: case 310: case 311: case 312: case 313: case 314: case 321: case 520: case 521: case 522: case 531:
        return "rainy";
      case 800:
        return "sunny";
      case 801:
        return "partly_cloudy_day";
      case 802: case 803: case 804:
        return "cloud";
      case 511: case 600: case 601: case 602: case 611: case 613: case 615: case 616: case 620: case 621: case 622:
        return "ac_unit";
      case 701: case 711: case 721: case 731: case 741: case 751: case 761: case 762: case 771: case 781:
        return "foggy";
      default:
        return "sunny";
    }
  }

  toCelsius(temp: number) {
    let celsius = temp - 273.15;
    celsius = Math.round((celsius + Number.EPSILON) * 100) / 100;
    return celsius;
  }
}
