import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwMapComponent } from './ow-map.component';

describe('OwMapComponent', () => {
  let component: OwMapComponent;
  let fixture: ComponentFixture<OwMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
