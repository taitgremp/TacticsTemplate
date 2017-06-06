import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Board }  from './board/board.component';
import { Tile }  from './tile/tile.component';

//import { MdToolbar } from '@angular/material';
//import { MdToolbarModule,MdToolbarRow } from '@angular/material';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ Board, Tile ],
  bootstrap:    [ Board ]
})
export class AppModule { }
