import { TestBed } from '@angular/core/testing';

import { ServiceWeatherService } from './service-weather.service';

describe('ServiceWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceWeatherService = TestBed.get(ServiceWeatherService);
    expect(service).toBeTruthy();
  });
});
