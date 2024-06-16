import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { BitcoinEffects } from './bitcoin.effects';
import { BitcoinService } from '../../bitcoin.service';
import * as BitcoinActions from '../actions/bitcoin.actions';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialBitcoinState, BitcoinState } from '../reducer/bitcoin.reducer';
import { cold, hot } from 'jasmine-marbles';

describe('BitcoinEffects', () => {
  let actions$: Observable<any>;
  let effects: BitcoinEffects;
  let bitcoinService: jasmine.SpyObj<BitcoinService>;
  let store: MockStore;

  const initialState = {
    bitcoin: initialBitcoinState
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('BitcoinService', ['getBitcoinValue', 'getTrendingSearchCoin']);

    TestBed.configureTestingModule({
      providers: [
        BitcoinEffects,
        provideMockActions(() => actions$),
        { provide: BitcoinService, useValue: spy },
        provideMockStore({ initialState })
      ]
    });

    effects = TestBed.inject(BitcoinEffects);
    bitcoinService = TestBed.inject(BitcoinService) as jasmine.SpyObj<BitcoinService>;
    store = TestBed.inject(MockStore);
  });

  describe('loadBitcoin$', () => {
    it('should return a loadBitcoinSuccess action with value on success', () => {
      const currency = 'USD';
      const value = { price: 50000 };
      const action = BitcoinActions.loadBitcoin({ currency });
      const outcome = BitcoinActions.loadBitcoinSuccess({ value });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: { bitcoin: { USD: value } } });
      const expected = cold('--b', { b: outcome });

      bitcoinService.getBitcoinValue.and.returnValue(response);

      expect(effects.loadBitcoin$).toBeObservable(expected);
    });

    it('should return a loadBitcoinFailure action on error', () => {
      const currency = 'USD';
      const action = BitcoinActions.loadBitcoin({ currency });
      const error = 'Error';
      const outcome = BitcoinActions.loadBitcoinFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });

      bitcoinService.getBitcoinValue.and.returnValue(response);

      expect(effects.loadBitcoin$).toBeObservable(expected);
    });
  });

  describe('loadTrendingBitcoin$', () => {
    it('should return cached data if it exists and is fresh', () => {
      const coins = [{ name: 'Bitcoin', price: 50000 }];
      const action = BitcoinActions.loadTrendingBitcoin();
      const outcome = BitcoinActions.loadTrendingBitcoinSuccess({ coins });

      actions$ = hot('-a-', { a: action });
      const state = cold('-a|', { a: initialBitcoinState });
      store.overrideSelector('selectTrendingBitcoinLastUpdated', Date.now());
      store.overrideSelector('selectTrendingBitcoinValue', coins);
      const expected = cold('--b', { b: outcome });

      expect(effects.loadTrendingBitcoin$).toBeObservable(expected);
    });

    it('should return loadTrendingBitcoinSuccess action with coins on success', () => {
      const coins = [{ name: 'Bitcoin', price: 50000 }];
      const action = BitcoinActions.loadTrendingBitcoin();
      const outcome = BitcoinActions.loadTrendingBitcoinSuccess({ coins });

      actions$ = hot('-a-', { a: action });
      const response = cold('-a|', { a: { coins } });
      const expected = cold('--b', { b: outcome });

      bitcoinService.getTrendingSearchCoin.and.returnValue(response);

      expect(effects.loadTrendingBitcoin$).toBeObservable(expected);
    });

    it('should return a loadTrendingBitcoinFailure action on error', () => {
      const action = BitcoinActions.loadTrendingBitcoin();
      const error = 'Error';
      const outcome = BitcoinActions.loadTrendingBitcoinFailure({ error });

      actions$ = hot('-a-', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });

      bitcoinService.getTrendingSearchCoin.and.returnValue(response);

      expect(effects.loadTrendingBitcoin$).toBeObservable(expected);
    });
  });
});
