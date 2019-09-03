import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveLetterComponent } from './loveletter.component';

describe('LoveletterComponent', () => {
  let component: LoveLetterComponent;
  let fixture: ComponentFixture<LoveLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
