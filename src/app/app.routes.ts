import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OpenweatherComponent } from './components/openweather/openweather.component';
import { GobComponent } from './components/gob/gob.component';
import { OwWeatherComponent } from './components/openweather/ow-weather/ow-weather.component';
import { GWeatherComponent } from './components/gob/g-weather/g-weather.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'openweather', component: OpenweatherComponent },
    { path: 'gob', component: GobComponent },
    { path: 'openweather/weather/:state', component: OwWeatherComponent },
    { path: 'gob/weather/:state', component: GWeatherComponent },
  ];