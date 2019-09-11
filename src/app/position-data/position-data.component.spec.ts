import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionDataComponent } from './position-data.component';

describe('PositionDataComponent', () => {
  let component: PositionDataComponent;
  let fixture: ComponentFixture<PositionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
