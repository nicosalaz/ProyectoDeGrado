import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoPanelComponent } from './proyecto-panel.component';

describe('ProyectoPanelComponent', () => {
  let component: ProyectoPanelComponent;
  let fixture: ComponentFixture<ProyectoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
