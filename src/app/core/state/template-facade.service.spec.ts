import { TestBed } from '@angular/core/testing';

import { TemplateFacadeService } from './template-facade.service';

describe('TemplateFacadeService', () => {
  let service: TemplateFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
