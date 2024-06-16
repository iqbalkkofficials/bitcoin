import { createReducer, on } from '@ngrx/store';
import * as BitcoinActions from '../actions/bitcoin.actions';

export interface State {
    value: any | null;
}

export const initialState: State = {
    value: null,
};


// reducer for updating current value of bitcoin for given currency
export const bitcoinReducer = createReducer(
    initialState,
    on(BitcoinActions.loadBitcoinSuccess, (state, { value }) => ({
        ...state,
        value
    })),


);

export interface BitcoinState {
    trendingCoins: any[];
    loading: boolean;
    error: any;
    lastUpdated: number | null; // Timestamp of the last update

}

export const initialBitcoinState: BitcoinState = {
    trendingCoins: [],
    loading: false,
    error: null,
    lastUpdated: null // Timestamp of the last update

};

// reducer for updating value of top search bitcoin on CoinGecko
export const bitcoinTrendingReducer = createReducer(
    initialBitcoinState,
    on(BitcoinActions.loadTrendingBitcoin, state => ({
        ...state
    })),
    on(BitcoinActions.loadTrendingBitcoinSuccess, (state, { coins }) => ({
        ...state,
        trendingCoins: coins,
        lastUpdated: Date.now()
    })),
)