import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwWeatherComponent } from './ow-weather.component';

describe('OwWeatherComponent', () => {
  let component: OwWeatherComponent;
  let fixture: ComponentFixture<OwWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
