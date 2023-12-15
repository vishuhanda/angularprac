import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobspageComponent } from './searchjobspage.component';

describe('SearchjobspageComponent', () => {
  let component: SearchjobspageComponent;
  let fixture: ComponentFixture<SearchjobspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchjobspageComponent]
    });
    fixture = TestBed.createComponent(SearchjobspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
