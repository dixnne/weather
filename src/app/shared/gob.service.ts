import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GobService {

  constructor(private http: HttpClient) { }

  getWeather(state: string) {
    return this.http.get("http://localhost:3000/gob/" + this.clearInput(state))
  }

  clearInput(input: string) {
    let cleared = input.toLowerCase();
    cleared = cleared.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cleared = cleared.replace(/\s+/g, '');
    return cleared;
  }
}
