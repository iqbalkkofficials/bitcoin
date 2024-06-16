import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BitcoinService } from '../../bitcoin.service';
import * as BitcoinActions from '../actions/bitcoin.actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

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

    constructor(
        private actions$: Actions,
        private bitcoinService: BitcoinService
    ) { }
}