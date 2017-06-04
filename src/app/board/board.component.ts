import { Component } from '@angular/core';
import { Tile } from '../tile/tile.component';
import { TileData } from '../tile/tileData.model';


@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class Board  {
    private tileBoard: TileData[][];

    constructor() {
      this.initBoard();
    }

    private initBoard() {
        this.tileBoard = [];

        var counter = 1;
        for( var x = 0; x < 6; x++ )
        {
          this.tileBoard[x] = [];
          for ( var y = 0; y < 8; y++ )
          {
             this.tileBoard[x][y] = new TileData(x,y,counter);
             counter++;
          }
        }
    }

    handleTileClick(tile: TileData){
      this.tileBoard[tile.xPosition][tile.yPosition].tempData = this.tileBoard[tile.xPosition][tile.yPosition].tempData + 1;
    }

}