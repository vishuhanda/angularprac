import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtabpageComponent } from './searchtabpage.component';

describe('SearchtabpageComponent', () => {
  let component: SearchtabpageComponent;
  let fixture: ComponentFixture<SearchtabpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtabpageComponent]
    });
    fixture = TestBed.createComponent(SearchtabpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
