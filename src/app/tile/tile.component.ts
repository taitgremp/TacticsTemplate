import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TileData } from './tileData.model';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
})
export class Tile  {
    @Input() thisNum: TileData;
    
    constructor() {}

}