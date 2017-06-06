import { Component, ViewChild } from '@angular/core';
import { Tile } from '../tile/tile.component';
import { TileData, Unit } from '../tile/tileData.model';
//import { MdToolbar } from '@angular/material';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css', "./menu.style.css"],
})
export class Board  {
    private tileBoard: TileData[][];

    constructor() {
      this.initBoard();
    }

    private initBoard() {
        this.tileBoard = [];

        var counter = 1;
        for( var x = 0; x < 8; x++ )
        {
          this.tileBoard[x] = [];
          for ( var y = 0; y < 6; y++ )
          {
             this.tileBoard[x][y] = new TileData(x,y,counter);
             this.tileBoard[x][y].occupied = false;
             counter++;
          }
        }
        this.tileBoard[4][4].occupied = true;
        this.tileBoard[4][4].thisUnit = new Unit();
        this.tileBoard[4][4].thisUnit.unitImage = "/assets/images/player_front_1.png";
    }

    handleTileClick(tile: TileData){
      this.tileBoard[tile.xPosition][tile.yPosition].tempData = this.tileBoard[tile.xPosition][tile.yPosition].tempData + 1;
    }

}