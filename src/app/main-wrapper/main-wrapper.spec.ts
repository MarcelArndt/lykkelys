import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWrapper } from './main-wrapper';

describe('MainWrapper', () => {
  let component: MainWrapper;
  let fixture: ComponentFixture<MainWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
