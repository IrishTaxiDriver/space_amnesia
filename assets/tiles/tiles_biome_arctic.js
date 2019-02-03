//BIOMES - ARCTIC TILES
Game.Tile.arcticSnowTile = new Game.Tile({
    character: '.',
    walkable: true,
    blocksLight: false,
    description: loc.TileSnowFloorDesc
});
Game.Tile.arcticIceTile = new Game.Tile({
    character: '.',
    foreground: 'aqua',
    walkable: true,
    blocksLight: false,
    description: loc.TileIceFloorDesc
});