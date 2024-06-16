import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bitcoin' },
  {
    path: 'bitcoin',
    loadChildren: () => import('./bitcoin/bitcoin.module').then(m => m.BitcoinModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
