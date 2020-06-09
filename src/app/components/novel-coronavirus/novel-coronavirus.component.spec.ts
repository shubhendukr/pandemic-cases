import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelCoronavirusComponent } from './novel-coronavirus.component';

describe('NovelCoronavirusComponent', () => {
  let component: NovelCoronavirusComponent;
  let fixture: ComponentFixture<NovelCoronavirusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelCoronavirusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelCoronavirusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
