import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBagdeComponent } from './mat-bagde.component';

describe('MatBagdeComponent', () => {
  let component: MatBagdeComponent;
  let fixture: ComponentFixture<MatBagdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBagdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBagdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
