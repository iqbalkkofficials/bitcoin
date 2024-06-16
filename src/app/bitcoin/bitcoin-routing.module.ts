import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BitcoinSearchValueComponent } from './bitcoin-search-value/bitcoin-search-value.component';
import { BitcoinListComponent } from './bitcoin-list/bitcoin-list.component';

const routes: Routes = [
  { path: 'list', component: BitcoinListComponent },
  { path: 'value', component: BitcoinSearchValueComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BitcoinRoutingModule { }