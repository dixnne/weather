import { Component } from '@angular/core';
import { OwMapComponent } from './ow-map/ow-map.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-openweather',
  standalone: true,
  imports: [OwMapComponent, RouterModule, FormsModule],
  templateUrl: './openweather.component.html',
  styleUrl: './openweather.component.css'
})
export class OpenweatherComponent {
  state: string = "";
}
