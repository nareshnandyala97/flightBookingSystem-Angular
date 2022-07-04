import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightregisterComponent } from './flightregister.component';

describe('FlightregisterComponent', () => {
  let component: FlightregisterComponent;
  let fixture: ComponentFixture<FlightregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
