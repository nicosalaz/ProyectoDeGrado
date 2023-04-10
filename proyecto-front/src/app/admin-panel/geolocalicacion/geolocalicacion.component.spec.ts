import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalicacionComponent } from './geolocalicacion.component';

describe('GeolocalicacionComponent', () => {
  let component: GeolocalicacionComponent;
  let fixture: ComponentFixture<GeolocalicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocalicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeolocalicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
