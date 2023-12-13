import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitypageComponent } from './activitypage.component';

describe('ActivitypageComponent', () => {
  let component: ActivitypageComponent;
  let fixture: ComponentFixture<ActivitypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitypageComponent]
    });
    fixture = TestBed.createComponent(ActivitypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
