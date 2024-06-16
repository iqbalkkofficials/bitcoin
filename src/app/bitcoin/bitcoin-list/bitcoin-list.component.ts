import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as BitcoinActions from '../store/actions/bitcoin.actions';
import { selectTrendingBitcoinValue } from '../store/selector/bitcoin.selector';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-bitcoin-list',
  templateUrl: './bitcoin-list.component.html',
  styleUrls: ['./bitcoin-list.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class BitcoinListComponent implements OnInit {
  searchValue: string = '';
  bitcoinTrendingValue$!: Observable<any>;
  tableData: any;
  dataSource = new MatTableDataSource<[]>;
  displayedColumns: string[] = ['coin_id', 'id', 'name', 'market_cap_rank'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private store: Store) { }

  ngOnInit() {
    // retrieve value from store using selector
    this.bitcoinTrendingValue$ = this.store.select(selectTrendingBitcoinValue);
    this.bitcoinTrendingValue$.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      })

    //send request to call getTrendingBitcoin API
    this.store.dispatch(BitcoinActions.loadTrendingBitcoin())

  }

}
