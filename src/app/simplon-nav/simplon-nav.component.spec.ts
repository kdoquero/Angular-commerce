import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplonNavComponent } from './simplon-nav.component';

describe('SimplonNavComponent', () => {
  let component: SimplonNavComponent;
  let fixture: ComponentFixture<SimplonNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplonNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
