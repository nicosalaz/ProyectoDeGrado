import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordingComponent } from './according.component';

describe('AccordingComponent', () => {
  let component: AccordingComponent;
  let fixture: ComponentFixture<AccordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
