import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobComponent } from './gob.component';

describe('GobComponent', () => {
  let component: GobComponent;
  let fixture: ComponentFixture<GobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
