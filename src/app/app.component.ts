import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OpenweatherComponent } from './components/openweather/openweather.component';
import { GobComponent } from './components/gob/gob.component';
import { GWeatherComponent } from './components/gob/g-weather/g-weather.component';
import { OwWeatherComponent } from './components/openweather/ow-weather/ow-weather.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent, OpenweatherComponent, GobComponent, GWeatherComponent, OwWeatherComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';

  hello(): void {
    alert("hola");
  }
}
