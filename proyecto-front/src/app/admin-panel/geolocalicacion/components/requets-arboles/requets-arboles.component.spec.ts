import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequetsArbolesComponent } from './requets-arboles.component';

describe('RequetsArbolesComponent', () => {
  let component: RequetsArbolesComponent;
  let fixture: ComponentFixture<RequetsArbolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequetsArbolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequetsArbolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
