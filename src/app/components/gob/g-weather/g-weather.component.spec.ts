import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWeatherComponent } from './g-weather.component';

describe('GWeatherComponent', () => {
  let component: GWeatherComponent;
  let fixture: ComponentFixture<GWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
