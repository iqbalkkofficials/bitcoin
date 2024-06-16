import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../store/actions/bitcoin.actions';
import { Observable } from 'rxjs';
import { selectBitcoinValue } from '../store/selector/bitcoin.selector';

@Component({
  selector: 'app-bitcoin-search-value',
  templateUrl: './bitcoin-search-value.component.html',
  styleUrls: ['./bitcoin-search-value.component.css']
})
export class BitcoinSearchValueComponent implements OnInit {
  searchValue: string = '';
  bitcoinValue$!: Observable<any | null>;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.bitcoinValue$ = this.store.pipe(select(selectBitcoinValue));
    let currency = this.searchValue;
    this.store.dispatch(UserActions.loadBitcoin({ currency }))
  }

}
