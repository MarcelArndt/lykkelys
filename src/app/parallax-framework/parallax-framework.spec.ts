import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxFramework } from './parallax-framework';

describe('ParallaxFramework', () => {
  let component: ParallaxFramework;
  let fixture: ComponentFixture<ParallaxFramework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxFramework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxFramework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
