import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUPComponent } from './user-sign-up.component';

describe('UserSignUPComponent', () => {
  let component: UserSignUPComponent;
  let fixture: ComponentFixture<UserSignUPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignUPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
