Game.Screen.ItemListScreen = function(template) {
    // Set up based on the template
    this._caption = template['caption'];
    this._okFunction = template['ok'];
    // By default, we use the identity function
    this._isAcceptableFunction = template['isAcceptable'] || function(x) {
        return x;
    }
    // Whether the user can select items at all.
    this._canSelectItem = template['canSelect'];
    // Whether the user can select multiple items.
    this._canSelectMultipleItems = template['canSelectMultipleItems'];
    // Whether a 'no item' option should appear.
    this._hasNoItemOption = template['hasNoItemOption'];
    this._entity = template['entity'] || null;
};

Game.Screen.ItemListScreen.prototype.setup = function(player, items) {
    // Should be called before switching to the screen.
    var count = 0;
    // Iterate over each item, keeping only the acceptable ones and counting
    // the number of acceptable items.
    var that = this;
    this._items = items.map(function(item) {
        // Transform the item into null if it's not acceptable
        if (that._isAcceptableFunction(item)) {
            count++;
            return item;
        } else {
            return null;
        }
    });
    // Clean set of selected indices
    this._selectedIndices = {};
    return count;
};

Game.Screen.ItemListScreen.prototype.render = function(display) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    // Render the caption in the top row
    display.drawText(0, 0, this._caption + ": " + Game._player.getFullInventorySlots() + " out of " + this._items.length);
    // Render the no item row if enabled
    if (this._hasNoItemOption) {
        display.drawText(0, 1, loc.ItemListScreenNoItems);
    }
    var row = 0;
    for (var i = 0; i < this._items.length; i++) {
        // If we have an item, we want to render it.
        if (this._items[i]) {
            // Get the letter matching the item's index
            var letter = letters.substring(i, i + 1);
            // If we have selected an item, show a +, else show a dash between
            // the letter and the item's name.
            var selectionState = (this._canSelectItem && this._canSelectMultipleItems &&
                this._selectedIndices[i]) ? '+' : '-';
            // Check if the item is worn or wielded
            var suffix = '';
            if (Util.isFunction(this._items[i].getSlot)) {
                if (this._items[i] === Game._player.getItemInSlot(this._items[i].getSlot())) {
                    if (this._items[i].isWearable()) {
                        suffix = loc.ItemListScreenWearingSuffix + "[" + this._items[i].getSlot() + "]";
                    }
                    if (this._items[i].isWieldable()) {
                        suffix = loc.ItemListScreenWieldingSuffix + "[" + this._items[i].getSlot() + "]";
                    }
                }
            }
            // Render at the correct row and add 2.
            display.drawText(0, 2 + row,  letter + ' ' + selectionState + ' ' +
                this._items[i].describe() + suffix);
            row++;
        }
    }
};

Game.Screen.ItemListScreen.prototype.executeOkFunction = function() {
    // Gather the selected items.
    var selectedItems = {};
    for (var key in this._selectedIndices) {
        selectedItems[key] = this._items[key];
        Debug.log("Game.Screen.ItemListScreen.prototype.executeOkFunction: _items: " + this._items[key]._name);
    }
    for (obj in selectedItems) {
        Debug.log("Game.Screen.ItemListScreen.prototype.executeOkFunction: Selected items: " + obj._name);
    }
    // Switch back to the play screen.
    if (Game._currentScreen._container)
        this._container = Game._currentScreen._container;
    Game.Screen.playScreen.setSubScreen(undefined);
    // Call the OK function and end the player's turn if it return true.
    if (!this._container) {
        if (this._okFunction(selectedItems)) {
            Debug.log("Game.Screen.ItemListScreen.prototype.executeOkFunction: Function OK.");
            Game._player.getMap().getEngine().unlock();
        }
    } else {
         if (this._okFunction(selectedItems, this._container)) {
            Debug.log("Game.Screen.ItemListScreen.prototype.executeOkFunction: Function OK.");
            Game._player.getMap().getEngine().unlock();
        }       
    }
};
Game.Screen.ItemListScreen.prototype.handleInput = function(inputType, inputData) {
    if (inputType === 'keydown') {
        Debug.log("Game.Screen.ItemListScreen.prototype.handleInput: Key pressed.");
        // If the user hit escape, hit enter and can't select an item, or hit
        // enter without any items selected, simply cancel out
        if (inputData.keyCode === ROT.VK_ESCAPE || 
            (inputData.keyCode === ROT.VK_RETURN && 
                (!this._canSelectItem || Object.keys(this._selectedIndices).length === 0))) {
            Debug.log("Game.Screen.ItemListScreen.prototype.handleInput: Exiting subScreen.");
            Game.Screen.playScreen.setSubScreen(undefined);
        // Handle pressing return when items are selected
        } else if (inputData.keyCode === ROT.VK_RETURN) {
            Debug.log("Game.Screen.ItemListScreen.prototype.handleInput: Executing OK function.");
            this.executeOkFunction();
        // Handle pressing zero when 'no item' selection is enabled
        } else if (this._canSelectItem && this._hasNoItemOption && inputData.keyCode === ROT.VK_0) {
            Debug.log("Game.Screen.ItemListScreen.prototype.handleInput: \'0\' pressed.");
            this._selectedIndices = {};
            this.executeOkFunction();
        // Handle pressing a letter if we can select
        } else if (this._canSelectItem && inputData.keyCode >= ROT.VK_A &&
            inputData.keyCode <= ROT.VK_Z) {
            Debug.log("Game.Screen.ItemListScreen.prototype.handleInput: Item selected.");
            // Check if it maps to a valid item by subtracting 'a' from the character
            // to know what letter of the alphabet we used.
            var index = inputData.keyCode - ROT.VK_A;
            if (this._items[index]) {
                // If multiple selection is allowed, toggle the selection status, else
                // select the item and exit the screen
                if (this._canSelectMultipleItems) {
                    if (this._selectedIndices[index]) {
                        delete this._selectedIndices[index];
                    } else {
                        this._selectedIndices[index] = true;
                    }
                    // Redraw screen
                    Game.refresh();
                } else {
                    this._selectedIndices[index] = true;
                    this.executeOkFunction();
                }
            }
        }
    }
};