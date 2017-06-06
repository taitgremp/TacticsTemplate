export class TileData {
    xPosition: number;
    yPosition: number;
    tempData: number;

    backgroundImage: string;
    occupied: boolean;
    thisUnit: Unit;

    constructor(xPos: number, yPos: number, tmep: number )
    {
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.tempData = tmep;
    }
}

export class Unit {
    unitImage: string;
}