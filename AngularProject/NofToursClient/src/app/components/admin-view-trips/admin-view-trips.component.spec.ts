import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewTripsComponent } from './admin-view-trips.component';

describe('AdminViewTripsComponent', () => {
  let component: AdminViewTripsComponent;
  let fixture: ComponentFixture<AdminViewTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
