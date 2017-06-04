import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Board }  from './board/board.component';
import { Tile }  from './tile/tile.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Board, Tile ],
  bootstrap:    [ Board ]
})
export class AppModule { }
