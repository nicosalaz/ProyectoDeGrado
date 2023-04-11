import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEspecieComponent } from './card-especie.component';

describe('CardEspecieComponent', () => {
  let component: CardEspecieComponent;
  let fixture: ComponentFixture<CardEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
