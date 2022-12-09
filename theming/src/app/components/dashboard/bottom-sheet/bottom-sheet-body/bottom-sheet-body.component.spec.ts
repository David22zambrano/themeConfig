import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetBodyComponent } from './bottom-sheet-body.component';

describe('BottomSheetBodyComponent', () => {
  let component: BottomSheetBodyComponent;
  let fixture: ComponentFixture<BottomSheetBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
