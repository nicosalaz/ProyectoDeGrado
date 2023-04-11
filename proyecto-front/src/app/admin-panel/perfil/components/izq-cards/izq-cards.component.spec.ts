import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzqCardsComponent } from './izq-cards.component';

describe('IzqCardsComponent', () => {
  let component: IzqCardsComponent;
  let fixture: ComponentFixture<IzqCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzqCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzqCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
