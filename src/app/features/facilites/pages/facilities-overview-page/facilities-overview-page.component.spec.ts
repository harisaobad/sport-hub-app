import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesOverviewPageComponent } from './facilities-overview-page.component';

describe('FacilitiesOverviewPageComponent', () => {
  let component: FacilitiesOverviewPageComponent;
  let fixture: ComponentFixture<FacilitiesOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilitiesOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitiesOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
