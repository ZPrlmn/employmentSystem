import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterComponentsComponent } from './writer-components.component';

describe('WriterComponentsComponent', () => {
  let component: WriterComponentsComponent;
  let fixture: ComponentFixture<WriterComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriterComponentsComponent]
    });
    fixture = TestBed.createComponent(WriterComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
