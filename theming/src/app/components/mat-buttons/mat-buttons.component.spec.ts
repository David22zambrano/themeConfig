import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonsComponent } from './mat-buttons.component';

describe('MatButtonsComponent', () => {
  let component: MatButtonsComponent;
  let fixture: ComponentFixture<MatButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
