Game.Screen.divInventoryManager = {
	_activeInventoryDiv: "Equip",
	manage: function(display) {

		if (!document.getElementById("canvasInventoryHelmSlot"))
			this.setupInventorySlots( document.getElementById( "canvasInventory" ) );

		if (!document.getElementById("canvasInventoryBagSlot1"))
			this.createBagSlots(document.getElementById( "canvasInventory" ));

		equipInventory = document.getElementById("canvasInventoryEquip");
		bagsInventory = document.getElementById("canvasInventoryBags");

		if (this._activeInventoryDiv == "Equip") {
			bagsInventory.style.display = "none";
			equipInventory.style.display = "";
			Game.Screen.divInventoryEquip.renderInventory();
		}
		else {
			bagsInventory.style.display = "";
			equipInventory.style.display = "none";
			Game.Screen.divInventoryBags.renderBags();
		}

	},
	writeItemCardAttributes: function(item) {

        if (item == null)
            return "Nothing Equipped";

        info = item.getSlot() + "<br>";

        if (item.getDefenseValue() != 0)
            info += "Defense: " + item.getDefenseValue() + "<br>";

        if (item.getAttackValue() != 0)
            info += "Attack: " + item.getAttackValue() + "<br>";

        if (item.getCritValue() != 0)
            info += "Crit +" + item.getCritValue() + "%<br>";

        if (item.getDodgeValue() != 0)
            info += "Dodge +" + item.getDodgeValue() + "%<br>";

        if (item.getHitValue() != 0)
            info += "Hit +" + item.getHitValue() + "%<br>"; 

        if (item.getParryValue() != 0)
            info += "Parry +" + item.getParryValue() + "%<br>";

        return info;
    },
    writeItemCardDescription(item) {

        if (item == null)
            return "Nothing Equipped";

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
                element.setAttribute("data-item-attributes", this.writeItemCardAttributes(item));
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

                card = document.getElementById( "canvasItemHoverCard" );
                card.style.display = "";
                card.style.top = element.offsetTop + 48 + "px";
                card.style.left = element.offsetLeft + 48 + "px";
                card.style.borderColor = element.getAttribute("data-item-color");

                cardTextItemTitle = document.getElementById( "inventoryItemHoverCardItemTitle" );
                cardTextItemTitle.innerHTML = element.getAttribute("data-item-title");
                cardTextItemTitle.style.color = element.getAttribute("data-item-color");

                cardTextItemAttributes = document.getElementById( "inventoryItemHoverCardItemAttributes" );
                cardTextItemAttributes.innerHTML = element.getAttribute("data-item-attributes");

                cardTextItemDescription = document.getElementById( "inventoryItemHoverCardItemDescription" );
                cardTextItemDescription.innerHTML = element.getAttribute("data-item-description");
            }
        });
    },
    addMouseLeaveListener: function(element) {
        element.addEventListener("mouseleave", function(event) {

            if (element.getAttribute("data-item") == "true") {
                card = document.getElementById( "canvasItemHoverCard" );
                card.style.display = "none";

                cardTextItemTitle = document.getElementById( "inventoryItemHoverCardItemTitle" );
                cardTextItemTitle.innerHTML = "";

                cardTextItemAttributes = document.getElementById( "inventoryItemHoverCardItemAttributes" );
                cardTextItemAttributes.innerHTML = "";

                cardTextItemDescription = document.getElementById( "inventoryItemHoverCardItemDescription" );
                cardTextItemDescription.innerHTML = "";
            }

        });
    },
    setupInventorySlots: function(inventory) {

    	var inventoryEquip = document.createElement("div");
    	inventoryEquip.id = "canvasInventoryEquip";

    	slots = ["canvasInventoryHelmSlot", "canvasInventoryBackSlot",
    			 "canvasInventoryChestSlot", "canvasInventoryFeetSlot",
    			 "canvasInventoryLegsSlot", "canvasInventoryWaistSlot",
    			 "canvasInventoryLHandSlot", "canvasInventoryRHandSlot"];

    	//Equip slots
    	slots.forEach(function(slot) {
    			inventoryEquip.appendChild(Game.Screen.divInventoryManager.createSlot(slot));
    	});

        inventory.appendChild(inventoryEquip);

        inventory.appendChild(this.createHoverCard());
    },
    createHoverCard: function () {

        var inventoryItemHoverCard = document.createElement("div");
        inventoryItemHoverCard.id = "canvasItemHoverCard";
        inventoryItemHoverCard.style.display = "none";

        var inventoryItemHoverCardItemTitle = document.createElement("p");
        inventoryItemHoverCardItemTitle.id = "inventoryItemHoverCardItemTitle";

        var inventoryItemHoverCardItemAttributes = document.createElement("p");
        inventoryItemHoverCardItemAttributes.id = "inventoryItemHoverCardItemAttributes";

        var inventoryItemHoverCardItemDescription = document.createElement("p");
        inventoryItemHoverCardItemDescription.id = "inventoryItemHoverCardItemDescription";

        inventoryItemHoverCard.appendChild(inventoryItemHoverCardItemTitle);
        inventoryItemHoverCard.appendChild(inventoryItemHoverCardItemAttributes);
        inventoryItemHoverCard.appendChild(inventoryItemHoverCardItemDescription);

        return inventoryItemHoverCard;

    },
    createBagSlots: function(inventoryDiv) {

		var canvasInventoryBags = document.createElement("div");
        canvasInventoryBags.id = "canvasInventoryBags";

		for(var i = 1; i <= 15; i++) {
			canvasInventoryBags.appendChild(this.createSlot("canvasInventoryBagSlot" + i));
		}

		inventoryDiv.appendChild(canvasInventoryBags);

	},
	createSlot: function(name) {

		var inventorySlot = document.createElement("div");
        inventorySlot.id = name;

        this.addMouseEnterListener(inventorySlot);
        this.addMouseLeaveListener(inventorySlot);

        return inventorySlot;

	}
};