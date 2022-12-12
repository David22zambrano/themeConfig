import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabsComponent } from './mat-tabs.component';

describe('MatTabsComponent', () => {
  let component: MatTabsComponent;
  let fixture: ComponentFixture<MatTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
