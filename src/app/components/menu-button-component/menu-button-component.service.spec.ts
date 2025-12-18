import { TestBed } from '@angular/core/testing';

import { MenuButtonComponentService } from './menu-button-component.service';

describe('MenuButtonComponent', () => {
  let service: MenuButtonComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuButtonComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
