import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCooperativeAdmissionComponent } from './new-cooperative-admission.component';

describe('NewCooperativeAdmissionComponent', () => {
  let component: NewCooperativeAdmissionComponent;
  let fixture: ComponentFixture<NewCooperativeAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCooperativeAdmissionComponent]
    });
    fixture = TestBed.createComponent(NewCooperativeAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
