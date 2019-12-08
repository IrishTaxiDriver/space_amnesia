Game.Screen.divInventoryManager = {
	_activeInventoryDiv: null,
	_itemNull: "Nothing Equipped",
	setup: function() {

		this._activeInventoryDiv = "equip";

		Game.Screen._canvasInventory = document.getElementById("canvasInventory");

		this.setupInventorySlots();
		this.createBagSlots(Game.Screen._canvasInventory);

		Game.Screen._inventoryEquip = document.getElementById("canvasInventoryEquip");
		Game.Screen._inventoryBags = document.getElementById("canvasInventoryBags");

	},
	manage: function() {

		if (this._activeInventoryDiv == null)
			this.setup();

		if (this._activeInventoryDiv == "equip") {
			Game.Screen._inventoryBags.style.display = "none";
			Game.Screen._inventoryEquip.style.display = "";
			Game.Screen.divInventoryEquip.renderInventory();
		}
		else {
			Game.Screen._inventoryBags.style.display = "";
			Game.Screen._inventoryEquip.style.display = "none";
			Game.Screen.divInventoryBags.renderBags();
		}

	},
	writeItemCardAttributes: function(item) {

        if (item == null)
            return this._itemNull;

        info = item.getSlot() + "<br>";

        if (item.getDefenseValue() != 0)
        	info += vsprintf('Defense: %d<br>', [item.getDefenseValue()]);

        if (item.getAttackValue() != 0)
        	info += vsprintf('Attack: %d<br>', [item.getAttackValue()]);

        if (item.getCritValue() != 0)
        	info += vsprintf('Crit +%d%<br>', [item.getCritValue()]);

        if (item.getDodgeValue() != 0)
        	info += vsprintf('Dodge +%d%<br>', [item.getDodgeValue()]);

        if (item.getHitValue() != 0)
        	info += vsprintf('Hit +%d%<br>', [item.getHitValue()]);

        if (item.getParryValue() != 0)
        	info += vsprintf('Parry +%d%<br>', [item.getParryValue()]);

        return info;
    },
    writeItemCardDescription(item) {

        if (item == null)
            return this._itemNull;

        if (item.getDescription() != '')
            return "\"" + item.getDescription() + "\"";
    },
    renderSlot: function(element, item) {

        default_icon_url = "url('assets/images/inventory/icons/empty_icon.png')";

        if (item) {
            imageIcon = "url('" + item.getIcon() + "')";
            if (element.style.backgroundImage != imageIcon) {
                element.style.backgroundImage = imageIcon;
                element.style.borderColor = item.getForeground();
                element.setAttribute("data-item", "true");
                element.setAttribute("data-item-title", item.getName());
                element.setAttribute("data-item-color", item.getForeground());

                if (item.getSlot() != "none")
                	element.setAttribute("data-item-attributes", this.writeItemCardAttributes(item));
                else
					element.setAttribute("data-item-attributes", "");

                element.setAttribute("data-item-description", this.writeItemCardDescription(item));
            }
        } else {
            if (element.style.backgroundImage != default_icon_url) {
                element.style.backgroundImage = default_icon_url;
                element.style.borderColor = "";
                element.setAttribute("data-item", "false");
                element.setAttribute("data-item-title", "");
                element.setAttribute("data-item-color", "");
                element.setAttribute("data-item-attributes", "");
                element.setAttribute("data-item-description", "");
            }
        }
    },
    addMouseEnterListener: function(element) {
        element.addEventListener("mouseenter", function(event) {

            if (element.getAttribute("data-item") == "true") {

                Game.Screen._inventoryItemHoverCard.style.display = "";
                Game.Screen._inventoryItemHoverCard.style.top = element.offsetTop + 48 + "px";
                Game.Screen._inventoryItemHoverCard.style.left = element.offsetLeft + 48 + "px";
                Game.Screen._inventoryItemHoverCard.style.borderColor = element.getAttribute("data-item-color");

                Game.Screen._inventoryItemHoverCardItemTitle.innerHTML = element.getAttribute("data-item-title");
                Game.Screen._inventoryItemHoverCardItemTitle.style.color = element.getAttribute("data-item-color");

                Game.Screen._inventoryItemHoverCardItemAttributes.innerHTML = element.getAttribute("data-item-attributes");

                Game.Screen._inventoryItemHoverCardItemDescription.innerHTML = element.getAttribute("data-item-description");
            }
        });
    },
    addMouseLeaveListener: function(element) {
        element.addEventListener("mouseleave", function(event) {

            if (element.getAttribute("data-item") == "true") {
                Game.Screen._inventoryItemHoverCard.style.display = "none";
                Game.Screen._inventoryItemHoverCardItemTitle.innerHTML = "";
                Game.Screen._inventoryItemHoverCardItemAttributes.innerHTML = "";
                Game.Screen._inventoryItemHoverCardItemDescription.innerHTML = "";
            }

        });
    },
    setupInventorySlots: function() {

    	Game.Screen._inventoryEquip = document.createElement("div");
    	Game.Screen._inventoryEquip.id = "canvasInventoryEquip";

    	slots = ["canvasInventoryHelmSlot", "canvasInventoryBackSlot",
    			 "canvasInventoryChestSlot", "canvasInventoryFeetSlot",
    			 "canvasInventoryLegsSlot", "canvasInventoryWaistSlot",
    			 "canvasInventoryLHandSlot", "canvasInventoryRHandSlot"];

    	//Equip slots
    	slots.forEach(function(slot) {
    			Game.Screen._inventoryEquip.appendChild(Game.Screen.divInventoryManager.createSlot(slot));
    	});

        Game.Screen._canvasInventory.appendChild(Game.Screen._inventoryEquip);

        this.createHoverCard();
    },
    createHoverCard: function () {

        Game.Screen._inventoryItemHoverCard = document.createElement("div");
        Game.Screen._inventoryItemHoverCard.id = "canvasItemHoverCard";
        Game.Screen._inventoryItemHoverCard.style.display = "none";

        Game.Screen._inventoryItemHoverCardItemTitle = document.createElement("p");
        Game.Screen._inventoryItemHoverCardItemTitle.id = "inventoryItemHoverCardItemTitle";

        Game.Screen._inventoryItemHoverCardItemAttributes = document.createElement("p");
        Game.Screen._inventoryItemHoverCardItemAttributes.id = "inventoryItemHoverCardItemAttributes";

        Game.Screen._inventoryItemHoverCardItemDescription = document.createElement("p");
        Game.Screen._inventoryItemHoverCardItemDescription.id = "inventoryItemHoverCardItemDescription";

        Game.Screen._inventoryItemHoverCard.appendChild(Game.Screen._inventoryItemHoverCardItemTitle);
        Game.Screen._inventoryItemHoverCard.appendChild(Game.Screen._inventoryItemHoverCardItemAttributes);
        Game.Screen._inventoryItemHoverCard.appendChild(Game.Screen._inventoryItemHoverCardItemDescription);


        Game.Screen._canvasInventory.appendChild(Game.Screen._inventoryItemHoverCard);

    },
    createBagSlots: function() {

		Game.Screen._inventoryBags = document.createElement("div");
        Game.Screen._inventoryBags.id = "canvasInventoryBags";

        Game.Screen._inventoryBagsText = document.createElement("p");
        Game.Screen._inventoryBagsText.id = "inventoryBagsText";

        Game.Screen._InventoryBagSlots = document.createElement("div");
        Game.Screen._InventoryBagSlots.id = "canvasInventoryBagSlots";

		for(var i = 1; i <= 15; i++) {
			Game.Screen._InventoryBagSlots.appendChild(this.createSlot("canvasInventoryBagSlot" + i));
		}

		Game.Screen._inventoryBags.appendChild(Game.Screen._InventoryBagSlots);
		Game.Screen._inventoryBags.appendChild(Game.Screen._inventoryBagsText);

		Game.Screen._canvasInventory.appendChild(Game.Screen._inventoryBags);

	},
	createSlot: function(name) {

		var inventorySlot = document.createElement("div");
        inventorySlot.id = name;

        this.addMouseEnterListener(inventorySlot);
        this.addMouseLeaveListener(inventorySlot);

        return inventorySlot;

	}
};