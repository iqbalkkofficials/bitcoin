import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as BitcoinActions from '../store/actions/bitcoin.actions';
import { Observable } from 'rxjs';
import { selectBitcoinValue, selectBitcoinValueError } from '../store/selector/bitcoin.selector';

@Component({
  selector: 'app-bitcoin-search-value',
  templateUrl: './bitcoin-search-value.component.html',
  styleUrls: ['./bitcoin-search-value.component.css']
})
export class BitcoinSearchValueComponent implements OnInit {
  searchValue: string = '';
  bitcoinValue$!: Observable<any | null>;
  errorMessage$!: Observable< any | null>;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // retrieve value from store using selector
    this.bitcoinValue$ = this.store.pipe(select(selectBitcoinValue));
    this.errorMessage$ = this.store.pipe(select (selectBitcoinValueError));

    //send which action to perform based on currency input
    let currency = this.searchValue;
    this.store.dispatch(BitcoinActions.loadBitcoin({ currency }))
  }

}
