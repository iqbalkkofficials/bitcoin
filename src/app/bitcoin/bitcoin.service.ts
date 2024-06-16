import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getBitcoinValue(currency: string): Observable<any> {
    return this.http.get<any>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=' + currency);
  }

  getTrendingSearchCoin() : Observable<any> {
    return this.http.get<any>('https://api.coingecko.com/api/v3/search/trending');
  }

}
