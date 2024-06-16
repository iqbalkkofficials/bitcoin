/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitcoinService } from './bitcoin.service';

describe('Service: Bitcoin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinService]
    });
  });

  it('should ...', inject([BitcoinService], (service: BitcoinService) => {
    expect(service).toBeTruthy();
  }));
});
