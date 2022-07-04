import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightupdateComponent } from './flightupdate.component';

describe('FlightupdateComponent', () => {
  let component: FlightupdateComponent;
  let fixture: ComponentFixture<FlightupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
