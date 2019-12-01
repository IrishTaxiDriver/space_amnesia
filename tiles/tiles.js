Game.Tile.nullTile = new Game.Tile({description: '(unknown)'});

//BIOMES - GENERAL TILES
Game.Tile.dirtFloorTile = new Game.Tile({
    character: '.',
    foreground: 'goldenrod',
    walkable: true,
    blocksLight: false,
    description: loc.TileDirtFloorDesc
});
Game.Tile.waterTile = new Game.Tile({
    character: '~',
    foreground: 'blue',
    walkable: false,
    blocksLight: false,
    description: loc.TileWaterDesc
});
Game.Tile.leavesTile = new Game.Tile({
    character: ',',
    foreground: 'goldenrod',
    walkable: false,
    blocksLight: false,
    description: loc.TileLeavesDesc
});
Game.Tile.sandTile = new Game.Tile({
    character: '.',
    foreground: 'yellow',
    walkable: true,
    blocksLight: false,
    description: loc.TileSandFloorDesc
});
Game.Tile.grassTile = new Game.Tile({
    character: '.',
    foreground: 'green',
    walkable: true,
    blocksLight: false,
    description: loc.TileGrassFloorDesc
});