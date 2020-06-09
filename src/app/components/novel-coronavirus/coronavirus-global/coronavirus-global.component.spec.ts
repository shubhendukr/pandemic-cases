import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronavirusGlobalComponent } from './coronavirus-global.component';

describe('CoronavirusGlobalComponent', () => {
  let component: CoronavirusGlobalComponent;
  let fixture: ComponentFixture<CoronavirusGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronavirusGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronavirusGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
