Game.Item = function(properties) {
    properties = properties || {};
    // Call the dynamic glyph's constructor with our set of properties
    Game.DynamicGlyph.call(this, properties);
    this._description = properties['description'] || '(unknown)';
};
// Make items inherit all the functionality from dynamic glyphs
Game.Item.extend(Game.DynamicGlyph);