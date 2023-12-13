import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiespageComponent } from './opportunitiespage.component';

describe('OpportunitiespageComponent', () => {
  let component: OpportunitiespageComponent;
  let fixture: ComponentFixture<OpportunitiespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunitiespageComponent]
    });
    fixture = TestBed.createComponent(OpportunitiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
