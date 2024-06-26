import { createAction, props } from '@ngrx/store';

// actions for sending typed currency and to get current value of bitcoin
export const loadBitcoin = createAction('[Bitcoin] Load Bitcoin', props<{ currency: string }>());
export const loadBitcoinSuccess = createAction('[Bitcoin] Load Bitcoin Success', props<{ value: any }>());
export const loadBitcoinFailure = createAction('[Bitcoin] Load Bitcoin Value Failure',props<{ error: string }>()
);

// actions for sending request to get trending bitcoin list of CoinGecko and to get its list
export const loadTrendingBitcoin = createAction('[BitcoinTrending] Load Trending Bitcoin');
export const loadTrendingBitcoinSuccess = createAction('[BitcoinTrending] Load Trending Bitcoin Success', props<{ coins: any[] }>());
export const loadTrendingBitcoinFailure = createAction('[BitcoinTrending] Load Trending Bitcoin Value Failure',props<{ error: string }>());