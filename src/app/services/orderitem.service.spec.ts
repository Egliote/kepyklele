import { TestBed, inject } from '@angular/core/testing';

import { OrderitemService } from './orderitem.service';

describe('OrderitemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderitemService]
    });
  });

  it('should be created', inject([OrderitemService], (service: OrderitemService) => {
    expect(service).toBeTruthy();
  }));
});
