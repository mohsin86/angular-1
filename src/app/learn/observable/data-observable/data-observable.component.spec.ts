import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataObservableComponent } from './data-observable.component';

describe('DataObservableComponent', () => {
  let component: DataObservableComponent;
  let fixture: ComponentFixture<DataObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
