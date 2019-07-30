import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstmodalComponent } from './firstmodal.component';

describe('FirstmodalComponent', () => {
  let component: FirstmodalComponent;
  let fixture: ComponentFixture<FirstmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
