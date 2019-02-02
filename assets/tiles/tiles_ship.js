//SHIP - TILES
Game.Tile.shipMetalFloorTile = new Game.Tile({
    character: '.',
    walkable: true,
    blocksLight: false,
    description: loc.TileShipMetalFloorDesc
});
Game.Tile.shipMetalWallTile = new Game.Tile({
    character: '#',
    walkable: false,
    blocksLight: true,
    description: loc.TileShipMetalWallDesc
});