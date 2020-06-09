import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronavirusCountryComponent } from './coronavirus-country.component';

describe('CoronavirusCountryComponent', () => {
  let component: CoronavirusCountryComponent;
  let fixture: ComponentFixture<CoronavirusCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronavirusCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronavirusCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
