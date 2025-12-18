import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputShowPasswordButton } from './dynamic-input-show-password-button';

describe('DynamicInputShowPasswordButton', () => {
  let component: DynamicInputShowPasswordButton;
  let fixture: ComponentFixture<DynamicInputShowPasswordButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicInputShowPasswordButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicInputShowPasswordButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
