import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAndServicesChargesComponent } from './parts-and-services-charges.component';

describe('PartsAndServicesChargesComponent', () => {
  let component: PartsAndServicesChargesComponent;
  let fixture: ComponentFixture<PartsAndServicesChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAndServicesChargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsAndServicesChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
