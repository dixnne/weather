import { Component } from '@angular/core';
import { GobService } from '../../../shared/gob.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-g-weather',
  standalone: true,
  imports: [],
  templateUrl: './g-weather.component.html',
  styleUrl: './g-weather.component.css',
})
export class GWeatherComponent {
  state: string = 'aguascalientes';
  data?: any;

  constructor(
    private gobservice: GobService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.state = params['state'];
      this.gobservice.getWeather(this.state).subscribe((res: any) => {
        console.log(res);
        this.data = res;
      });
    });
  }
}
