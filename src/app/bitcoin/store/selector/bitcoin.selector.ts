import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BitcoinState, State } from '../reducer/bitcoin.reducer';

export const selectBitcoinState = createFeatureSelector<State>('bitcoin');
export const selectTrendingBitcoinState = createFeatureSelector<BitcoinState>('bitcoinTending');

export const selectBitcoinValue = createSelector(
  selectBitcoinState,
  (state: State) => state.value
);


export const selectTrendingBitcoinValue = createSelector(
    selectTrendingBitcoinState,
    (state: BitcoinState) => state.trendingCoins
  );

  export const selectTrendingBitcoinLastUpdated = createSelector(
    selectTrendingBitcoinState,
    state => state.lastUpdated
  );

  export const selectBitcoinError = createSelector(
    selectTrendingBitcoinState,
    (state: BitcoinState) => state.error
  );