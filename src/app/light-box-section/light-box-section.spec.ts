import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBoxSection } from './light-box-section';

describe('LightBoxSection', () => {
  let component: LightBoxSection;
  let fixture: ComponentFixture<LightBoxSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightBoxSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightBoxSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
