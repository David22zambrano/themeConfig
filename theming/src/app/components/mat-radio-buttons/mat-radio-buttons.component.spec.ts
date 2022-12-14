import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioButtonsComponent } from './mat-radio-buttons.component';

describe('MatRadioButtonsComponent', () => {
  let component: MatRadioButtonsComponent;
  let fixture: ComponentFixture<MatRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatRadioButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
