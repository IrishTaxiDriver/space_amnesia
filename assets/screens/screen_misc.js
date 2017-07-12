Game.Screen.pickupScreen = new Game.Screen.ItemListScreen({
    caption: loc.PickupScreenChoosePickup,
    canSelect: true,
    canSelectMultipleItems: true,
    ok: function(selectedItems) {
        // Try to pick up all items, messaging the player if they couldn't all be
        // picked up.
        if (!this._player.pickupItems(Object.keys(selectedItems))) {
            Game.sendMessage(this._player, loc.PickupScreenPartialPickup);
        }
        return true;
    }
});

Game.Screen.dropScreen = new Game.Screen.ItemListScreen({
    caption: loc.DropScreenChooseDrop,
    canSelect: true,
    canSelectMultipleItems: false,
    ok: function(selectedItems) {
        // Drop the selected item
        this._player.dropItem(Object.keys(selectedItems)[0]);
        return true;
    }
});

Game.Screen.eatScreen = new Game.Screen.ItemListScreen({
    caption: loc.EatScreenChooseEat,
    canSelect: true,
    canSelectMultipleItems: false,
    isAcceptable: function(item) {
        return item && item.hasMixin('Edible');
    },
    ok: function(selectedItems) {
        // Eat the item, removing it if there are no consumptions remaining.
        var key = Object.keys(selectedItems)[0];
        var item = selectedItems[key];
        Game.sendMessage(this._player, loc.EatScreenEat, [item.describeThe()]);
        item.eat(this._player);
        if (!item.hasRemainingConsumptions()) {
            this._player.removeItem(key);
        }
        return true;
    }
});

Game.Screen.containerScreen = new Game.Screen.ItemListScreen({
    caption: loc.ContainerScreenChooseItem,
    canSelect: true,
    canSelectMultipleItems: true,
    isAcceptable: function(item) {
        return item;
    },
    ok: function(selectedItems,container) {
        // Try to pick up all items, messaging the player if they couldn't all be
        // picked up.
        if (!this._player.pickupItemsFromContainer(Object.keys(selectedItems), container)) {
            Game.sendMessage(this._player, loc.PickupScreenPartialPickup);
        }
        return true;
    }
});

Game.Screen.wieldScreen = new Game.Screen.ItemListScreen({
    caption: loc.WieldScreenChooseWield,
    canSelect: true,
    canSelectMultipleItems: false,
    hasNoItemOption: true,
    isAcceptable: function(item) {
        return item && item.hasMixin('Equippable') && item.isWieldable();
    },
    ok: function(selectedItems) {
        // Check if we selected 'no item'
        var keys = Object.keys(selectedItems);
        if (keys.length === 0) {
            this._player.unequip("all");
            Game.sendMessage(this._player, loc.WieldScreenEmptyHanded)
        } else {
            var item = selectedItems[keys[0]];
            var removedItem = null;
            var slot = item.getSlot();
            // Make sure to unequip the slot first, if theres something there.
            if (this._player.getItemInSlot(slot) != null) {
                removedItem = this._player.getItemInSlot(slot)
                this._player.unequip(removedItem);
            }
            // If we just unequipped the item above, we don't want to re-equip it.
            if (removedItem != item) {
                this._player.equip(item);
                Game.sendMessage(this._player, loc.WearScreenYouAreWearing, [item.describeA()]);
            }
        }
        return true;
    }
});

Game.Screen.wearScreen = new Game.Screen.ItemListScreen({
    caption: loc.WearScreenChooseWear,
    canSelect: true,
    canSelectMultipleItems: false,
    hasNoItemOption: true,
    isAcceptable: function(item) {
        return item && item.hasMixin('Equippable') && item.isWearable();
    },
    ok: function(selectedItems) {
        // Check if we selected 'no item'
        var keys = Object.keys(selectedItems);
        if (keys.length === 0) {
            this._player.unequip("all");
            Game.sendMessage(this._player, loc.WearScreenNude)
        } else {
            var item = selectedItems[keys[0]];
            var removedItem = null;
            var slot = item.getSlot();
            // Make sure to unequip the slot first, if theres something there.
            if (this._player.getItemInSlot(slot) != null) {
                removedItem = this._player.getItemInSlot(slot)
                this._player.unequip(removedItem);
            }
            // If we just unequipped the item above, we don't want to re-equip it.
            if (removedItem != item) {
                this._player.equip(item);
                Game.sendMessage(this._player, loc.WearScreenYouAreWearing, [item.describeA()]);
            }
        }
        return true;
    }
});

Game.Screen.examineScreen = new Game.Screen.ItemListScreen({
    caption: loc.ExamineScreenChooseExamine,
    canSelect: true,
    canSelectMultipleItems: false,
    isAcceptable: function(item) {
        return true;
    },
    ok: function(selectedItems) {
        var keys = Object.keys(selectedItems);
        if (keys.length > 0) {
            var item = selectedItems[keys[0]];
            Game.sendMessage(this._player, loc.ExamineScreenIts, 
                [
                    item.describeA(false),
                    item.details()
                ]);
        }
        return true;
    }
});

Game.Screen.gainStatScreen = {
    setup: function(entity) {
        // Must be called before rendering.
        this._entity = entity;
        this._options = entity.getStatOptions();
    },
    render: function(display) {
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        display.drawText(0, 0, loc.GainStatScreenChooseStat);

        // Iterate through each of our options
        for (var i = 0; i < this._options.length; i++) {
            display.drawText(0, 2 + i, 
                letters.substring(i, i + 1) + ' - ' + this._options[i][0]);
        }

        // Render remaining stat points
        display.drawText(0, 4 + this._options.length,
            loc.GainStatScreenRemainingPoints + this._entity.getStatPoints());   
    },
    handleInput: function(inputType, inputData) {
        if (inputType === 'keydown') {
            // If a letter was pressed, check if it matches to a valid option.
            if (inputData.keyCode >= ROT.VK_A && inputData.keyCode <= ROT.VK_Z) {
                // Check if it maps to a valid item by subtracting 'a' from the character
                // to know what letter of the alphabet we used.
                var index = inputData.keyCode - ROT.VK_A;
                if (this._options[index]) {
                    // Call the stat increasing function
                    this._options[index][1].call(this._entity);
                    // Decrease stat points
                    this._entity.setStatPoints(this._entity.getStatPoints() - 1);
                    // If we have no stat points left, exit the screen, else refresh
                    if (this._entity.getStatPoints() == 0) {
                        Game.Screen.playScreen.setSubScreen(undefined);
                    } else {
                        Game.refresh();
                    }
                }
            }
        }
    }
};

// Define our help screen
Game.Screen.helpScreen = {
    render: function(display) {
        var text = loc.HelpScreenText;
        var border = '------------------';
        var y = 0;
        display.drawText(Game.getScreenWidth() / 2 - text.length / 2, y++, text);
        display.drawText(Game.getScreenWidth() / 2 - text.length / 2, y++, border);
        display.drawText(0, y++, 'You wake up with no memory.');
        display.drawText(0, y++, 'Explore your surroundings.');
        y += 3;
        display.drawText(0, y++, '[' + String.fromCharCode(config.PickupKey) + '] ' + loc.HelpScreenPickupKeyDesc);
        display.drawText(0, y++, '[' + String.fromCharCode(config.DropKey) + '] ' + loc.HelpScreenDropKeyDesc);
        display.drawText(0, y++, '[' + String.fromCharCode(config.EatKey) + '] ' + loc.HelpScreenEatKeyDesc);
        display.drawText(0, y++, '[' + String.fromCharCode(config.WearKey) + '] ' + loc.HelpScreenWieldKeyDesc);
        display.drawText(0, y++, '[SHIFT + ' + String.fromCharCode(config.WearKey) + '] ' + loc.HelpScreenWearKeyDesc);
        display.drawText(0, y++, '[' + String.fromCharCode(config.ExamineKey) + '] ' + loc.HelpScreenExamineKeyDesc);
        display.drawText(0, y++, '[' + String.fromCharCode(config.LookKey) + '] ' + loc.HelpScreenLookKeyDesc);
        display.drawText(0, y++, '[' + String.fromCharCode(config.HelpKey) + '] ' + loc.HelpScreenHelpKeyDesc);
        y += 3;
        text = '--- ' + loc.HelpScreenAnyKey + ' ---';
        display.drawText(Game.getScreenWidth() / 2 - text.length / 2, y++, text);
    },
    handleInput: function(inputType, inputData) {
        Game.Screen.playScreen.setSubScreen(null);
    }
};