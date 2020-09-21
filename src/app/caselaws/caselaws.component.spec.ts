import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaselawsComponent } from './caselaws.component';

describe('CaselawsComponent', () => {
  let component: CaselawsComponent;
  let fixture: ComponentFixture<CaselawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaselawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaselawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
