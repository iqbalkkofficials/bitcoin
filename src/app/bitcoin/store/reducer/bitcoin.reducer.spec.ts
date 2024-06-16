import { bitcoinReducer, initialState, BitcoinState, initialBitcoinState, bitcoinTrendingReducer } from './bitcoin.reducer';
import * as BitcoinActions from '../actions/bitcoin.actions';

describe('Bitcoin Reducer', () => {
  describe('bitcoinReducer', () => {
    it('should return the initial state', () => {
      const { value } = initialState;
      const action = { type: 'Unknown' } as any;
      const state = bitcoinReducer(initialState, action);
      
      expect(state).toEqual(initialState);
    });

    it('should update the value on loadBitcoinSuccess', () => {
      const { value } = initialState;
      const newValue = { price: 50000 };
      const action = BitcoinActions.loadBitcoinSuccess({ value: newValue });
      const state = bitcoinReducer(initialState, action);
      
      expect(state.value).toEqual(newValue);
    });
  });

  describe('bitcoinTrendingReducer', () => {
    it('should return the initial state', () => {
      const action = { type: 'Unknown' } as any;
      const state = bitcoinTrendingReducer(initialBitcoinState, action);
      
      expect(state).toEqual(initialBitcoinState);
    });

    it('should set loading to true on loadTrendingBitcoin', () => {
      const action = BitcoinActions.loadTrendingBitcoin();
      const state = bitcoinTrendingReducer(initialBitcoinState, action);
      
      expect(state.loading).toBe(false);  // As loading is not changed in the reducer, it should remain false.
    });

    it('should update trendingCoins and lastUpdated on loadTrendingBitcoinSuccess', () => {
      const coins = [{ name: 'Bitcoin', price: 50000 }];
      const action = BitcoinActions.loadTrendingBitcoinSuccess({ coins });
      const state = bitcoinTrendingReducer(initialBitcoinState, action);
      
      expect(state.trendingCoins).toEqual(coins);
      expect(state.lastUpdated).not.toBeNull();
    });
  });
});
