import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BitcoinEffects } from './bitcoin/store/effects/bitcoin.effects';
import { bitcoinReducer, bitcoinTrendingReducer } from './bitcoin/store/reducer/bitcoin.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ bitcoin: bitcoinReducer, bitcoinTending: bitcoinTrendingReducer }),
    EffectsModule.forRoot([BitcoinEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
