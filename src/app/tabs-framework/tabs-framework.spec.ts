import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsFramework } from './tabs-framework';

describe('TabsFramework', () => {
  let component: TabsFramework;
  let fixture: ComponentFixture<TabsFramework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsFramework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsFramework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
