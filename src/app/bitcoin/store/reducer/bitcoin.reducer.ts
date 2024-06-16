import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/bitcoin.actions';

export interface State {
    value: any | null;
}

export const initialState: State = {
    value: null,
};

export const bitcoinReducer = createReducer(
    initialState,
    on(UserActions.loadBitcoinSuccess, (state, { value }) => ({
        ...state, loading: false,
        value
    })),
);