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

//BIOMES - UNDERGROUND TILES
Game.Tile.undergroundFloorTile = new Game.Tile({
    character: '.',
    foreground: 'goldenrod',
    walkable: true,
    blocksLight: false,
    description: loc.TileCaveFloorDesc
});
Game.Tile.undergroundWallTile = new Game.Tile({
    character: '#',
    foreground: 'goldenrod',
    diggable: true,
    description: loc.TileCaveWallDesc
});
Game.Tile.undergroundStairsUpTile = new Game.Tile({
    character: '<',
    foreground: 'white',
    walkable: true,
    blocksLight: false,
    description: loc.TileCaveStaircaseUpDesc
});
Game.Tile.undergroundStairsDownTile = new Game.Tile({
    character: '>',
    foreground: 'white',
    walkable: true,
    blocksLight: false,
    description: loc.TileCaveStaircaseDownDesc
});

//BIOMES - TEMPERATE TILES
Game.Tile.temperateTreeTile = new Game.Tile({
    character: '#',
    foreground: 'green',
    blocksLight: true,
    description: loc.TileTemperateTreesDesc
});

//BIOMES - JUNGLE TILES
Game.Tile.jungleTreeTile = new Game.Tile({
    character: '#',
    foreground: 'green',
    blocksLight: true,
    description: loc.TileJungleTreesDesc
});

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

//BIOMES - SAVANNAH TILES
Game.Tile.savannahDryGrassTile = new Game.Tile({
    character: '.',
    walkable: true,
    blocksLight: false,
    description: loc.TileDryGrassFloorDesc
});

//BIOMES - OCEAN TILES
Game.Tile.oceanOpenWaterTile = new Game.Tile({
    character: '~',
    foreground: "blue",
    blocksLight: false,
    description: loc.TileOpenWaterFloorDesc
});