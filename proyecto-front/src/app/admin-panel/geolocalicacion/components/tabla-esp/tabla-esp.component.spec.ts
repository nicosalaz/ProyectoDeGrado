import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEspComponent } from './tabla-esp.component';

describe('TablaEspComponent', () => {
  let component: TablaEspComponent;
  let fixture: ComponentFixture<TablaEspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
