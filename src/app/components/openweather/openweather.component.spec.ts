import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenweatherComponent } from './openweather.component';

describe('OpenweatherComponent', () => {
  let component: OpenweatherComponent;
  let fixture: ComponentFixture<OpenweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenweatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
