import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgesoidiomasComponent } from './progesoidiomas.component';

describe('ProgesoidiomasComponent', () => {
  let component: ProgesoidiomasComponent;
  let fixture: ComponentFixture<ProgesoidiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgesoidiomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgesoidiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
