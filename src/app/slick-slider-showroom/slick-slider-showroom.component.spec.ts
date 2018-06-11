import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickSliderShowroomComponent } from './slick-slider-showroom.component';

describe('SlickSliderShowroomComponent', () => {
  let component: SlickSliderShowroomComponent;
  let fixture: ComponentFixture<SlickSliderShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlickSliderShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickSliderShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
