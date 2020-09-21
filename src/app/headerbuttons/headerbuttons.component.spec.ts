import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbuttonsComponent } from './headerbuttons.component';

describe('HeaderbuttonsComponent', () => {
  let component: HeaderbuttonsComponent;
  let fixture: ComponentFixture<HeaderbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
