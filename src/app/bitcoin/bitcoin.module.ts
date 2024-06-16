import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitcoinSearchValueComponent } from './bitcoin-search-value/bitcoin-search-value.component';
import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BitcoinRoutingModule,
    SharedModule
  ],
  declarations: [BitcoinSearchValueComponent]
})
export class BitcoinModule { }
