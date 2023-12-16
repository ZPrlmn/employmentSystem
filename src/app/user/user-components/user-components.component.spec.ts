import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponentsComponent } from './user-components.component';

describe('UserComponentsComponent', () => {
  let component: UserComponentsComponent;
  let fixture: ComponentFixture<UserComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponentsComponent]
    });
    fixture = TestBed.createComponent(UserComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
