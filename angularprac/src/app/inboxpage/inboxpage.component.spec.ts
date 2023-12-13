import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxpageComponent } from './inboxpage.component';

describe('InboxpageComponent', () => {
  let component: InboxpageComponent;
  let fixture: ComponentFixture<InboxpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxpageComponent]
    });
    fixture = TestBed.createComponent(InboxpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
