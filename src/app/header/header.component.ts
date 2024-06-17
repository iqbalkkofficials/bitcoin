import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = [{route:'bitcoin/list',name:'Trending Coin on CoinGecko'},{route:'bitcoin/value',name:'Find your Bitcoin Value'}];
  activeLink = this.links[0];
  background: ThemePalette = "primary";
  constructor() { }

  ngOnInit() {
  }

}
