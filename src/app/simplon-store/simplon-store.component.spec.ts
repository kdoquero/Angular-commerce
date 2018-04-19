import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplonStoreComponent } from './simplon-store.component';

describe('SimplonStoreComponent', () => {
  let component: SimplonStoreComponent;
  let fixture: ComponentFixture<SimplonStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplonStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplonStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
