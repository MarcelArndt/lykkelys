import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirdCards } from './gird-cards';

describe('GirdCards', () => {
  let component: GirdCards;
  let fixture: ComponentFixture<GirdCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirdCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirdCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
