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