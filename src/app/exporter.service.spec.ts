import { TestBed, inject } from '@angular/core/testing';

import { ExporterService } from './exporter.service';

describe('ExporterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExporterService]
    });
  });

  it('should be created', inject([ExporterService], (service: ExporterService) => {
    expect(service).toBeTruthy();
  }));
});
