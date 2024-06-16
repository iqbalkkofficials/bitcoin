import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { BitcoinService } from '../../bitcoin.service';
import * as BitcoinActions from '../actions/bitcoin.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectBitcoinState, selectTrendingBitcoinLastUpdated, selectTrendingBitcoinValue, selectTrendingBitcoinState } from '../selector/bitcoin.selector';
import { initialBitcoinState, State } from '../reducer/bitcoin.reducer';
import { CACHE_DURATION } from '../../../constants/contants'

@Injectable()
export class BitcoinEffects {

    // effect for retrieving current bitcoin value of given currency
    loadBitcoin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BitcoinActions.loadBitcoin),
            mergeMap(action =>
                this.bitcoinService.getBitcoinValue(action.currency).pipe(
                    map(response => {
                        const value = response.bitcoin?.[action.currency] ?? null;
                        return BitcoinActions.loadBitcoinSuccess({ value })
                    })
                )
            )
        )
    );

    loadTrendingBitcoin$ = createEffect(() => this.actions$.pipe(
        ofType(BitcoinActions.loadTrendingBitcoin),
        withLatestFrom(this.store.pipe(select(selectTrendingBitcoinLastUpdated))),
        switchMap(([action, lastUpdated]) => {

            const now = Date.now();
            if (lastUpdated && (now - lastUpdated) < CACHE_DURATION) {
                // Return cached data
                return this.store.pipe(
                    select(selectTrendingBitcoinValue),
                    map(coins => BitcoinActions.loadTrendingBitcoinSuccess({ coins }))
                );
                //return of(BitcoinActions.loadTrendingBitcoinSuccess({ coins: state.trendingCoins }));

            } else {
                // Make API call
                return this.bitcoinService.getTrendingSearchCoin().pipe(
                    map(response => {
                        const coins = response.coins ?? null;
                        return BitcoinActions.loadTrendingBitcoinSuccess({ coins })
                    }
                    ));
            }
        })
    ));

    constructor(
        private actions$: Actions,
        private bitcoinService: BitcoinService,
        private store: Store
    ) { }
}