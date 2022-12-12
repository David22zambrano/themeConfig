import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDataPickerComponent } from './mat-data-picker.component';

describe('MatDataPickerComponent', () => {
  let component: MatDataPickerComponent;
  let fixture: ComponentFixture<MatDataPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDataPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDataPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
