import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPerformedComponent } from './services-performed.component';

describe('ServicesPerformedComponent', () => {
  let component: ServicesPerformedComponent;
  let fixture: ComponentFixture<ServicesPerformedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPerformedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPerformedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
