import { TestBed } from '@angular/core/testing';

import { BuscarProductsService } from './buscar-products.service';

describe('BuscarProductsService', () => {
  let service: BuscarProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
