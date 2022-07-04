import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidcomponenetComponent } from './validcomponenet.component';

describe('ValidcomponenetComponent', () => {
  let component: ValidcomponenetComponent;
  let fixture: ComponentFixture<ValidcomponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidcomponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidcomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
