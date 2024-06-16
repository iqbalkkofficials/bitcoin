import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducer/bitcoin.reducer';

export const selectBitcoinState = createFeatureSelector<State>('bitcoin');

export const selectBitcoinValue = createSelector(
  selectBitcoinState,
  (state: State) => state.value
);