import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDescriptionComponent } from './icon-description.component';

describe('IconDescriptionComponent', () => {
  let component: IconDescriptionComponent;
  let fixture: ComponentFixture<IconDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDescriptionComponent]
    });
    fixture = TestBed.createComponent(IconDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
