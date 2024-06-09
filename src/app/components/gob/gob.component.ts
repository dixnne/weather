import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GMapComponent } from './g-map/g-map.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gob',
  standalone: true,
  imports: [FormsModule, GMapComponent, RouterModule],
  templateUrl: './gob.component.html',
  styleUrl: './gob.component.css'
})
export class GobComponent {

  state: string = "";
}
