import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-bitcoin-search-value',
  templateUrl: './bitcoin-search-value.component.html',
  styleUrls: ['./bitcoin-search-value.component.css']
})
export class BitcoinSearchValueComponent implements OnInit {
  title = 'Bitcoin Value Search';
  bitcoinValue: number | null = null;
  errorMessage: string | null = null;
  searchValue: string = '';
  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
  }

  onSubmit() :void {
    this.bitcoinService.getBitcoinValue(this.searchValue).subscribe(
      data => {
        if (data.bitcoin === '{}') {
          this.errorMessage = "Enter a valid currency"
        } else {
          this.bitcoinValue = data.bitcoin[this.searchValue];
        }
      },
      error => {
        this.bitcoinValue = null;
        this.errorMessage = 'Failed to fetch the Bitcoin value. Please try again later.';
      }
    );
  }

}
