import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPresentacionComponent } from './encabezado-presentacion.component';

describe('EncabezadoPresentacionComponent', () => {
  let component: EncabezadoPresentacionComponent;
  let fixture: ComponentFixture<EncabezadoPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoPresentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
