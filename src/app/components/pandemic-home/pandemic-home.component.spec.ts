import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandemicHomeComponent } from './pandemic-home.component';

describe('PandemicHomeComponent', () => {
  let component: PandemicHomeComponent;
  let fixture: ComponentFixture<PandemicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandemicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandemicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
