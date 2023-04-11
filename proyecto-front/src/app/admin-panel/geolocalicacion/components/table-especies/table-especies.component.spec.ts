import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEspeciesComponent } from './table-especies.component';

describe('TableEspeciesComponent', () => {
  let component: TableEspeciesComponent;
  let fixture: ComponentFixture<TableEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEspeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
