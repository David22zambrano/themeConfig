import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStepperComponent } from './mat-stepper.component';

describe('MatStepperComponent', () => {
  let component: MatStepperComponent;
  let fixture: ComponentFixture<MatStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
