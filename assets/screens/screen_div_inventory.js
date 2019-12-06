Game.Screen.divInventory = {
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

        //Helm Slot
        var inventoryHelmSlot = document.createElement("div");
        inventoryHelmSlot.id = "canvasInventoryHelmSlot";
        this.addMouseEnterListener(inventoryHelmSlot);
        this.addMouseLeaveListener(inventoryHelmSlot);
        inventory.appendChild(inventoryHelmSlot);

        //Back Slot
        var inventoryBackSlot = document.createElement("div");
        inventoryBackSlot.id = "canvasInventoryBackSlot";
        this.addMouseEnterListener(inventoryBackSlot);
        this.addMouseLeaveListener(inventoryBackSlot);
        inventory.appendChild(inventoryBackSlot);

        //Chest Slot
        var inventoryChestSlot = document.createElement("div");
        inventoryChestSlot.id = "canvasInventoryChestSlot";
        this.addMouseEnterListener(inventoryChestSlot);
        this.addMouseLeaveListener(inventoryChestSlot);
        inventory.appendChild(inventoryChestSlot);

        //Feet Slot
        var inventoryFeetSlot = document.createElement("div");
        inventoryFeetSlot.id = "canvasInventoryFeetSlot";
        this.addMouseEnterListener(inventoryFeetSlot);
        this.addMouseLeaveListener(inventoryFeetSlot);
        inventory.appendChild(inventoryFeetSlot);

        //Legs Slot
        var inventoryLegsSlot = document.createElement("div");
        inventoryLegsSlot.id = "canvasInventoryLegsSlot";
        this.addMouseEnterListener(inventoryLegsSlot);
        this.addMouseLeaveListener(inventoryLegsSlot);
        inventory.appendChild(inventoryLegsSlot);

        //Waist Slot
        var inventoryWaistSlot = document.createElement("div");
        inventoryWaistSlot.id = "canvasInventoryWaistSlot";
        this.addMouseEnterListener(inventoryWaistSlot);
        this.addMouseLeaveListener(inventoryWaistSlot);
        inventory.appendChild(inventoryWaistSlot);

        //LHand Slot
        var inventoryLHandSlot = document.createElement("div");
        inventoryLHandSlot.id = "canvasInventoryLHandSlot";
        this.addMouseEnterListener(inventoryLHandSlot);
        this.addMouseLeaveListener(inventoryLHandSlot);
        inventory.appendChild(inventoryLHandSlot);

        //RHand Slot
        var inventoryRHandSlot = document.createElement("div");
        inventoryRHandSlot.id = "canvasInventoryRHandSlot";
        this.addMouseEnterListener(inventoryRHandSlot);
        this.addMouseLeaveListener(inventoryRHandSlot);
        inventory.appendChild(inventoryRHandSlot);

        //Item Hover Card
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
        inventory.appendChild(inventoryItemHoverCard);
    },
    renderInventory: function(display) {
        //NOTE: This is appearantly bad performance wise, should store them.
        
		this._player = Game.Screen.playScreen._player;

        inventoryHelmSlotElement  = document.getElementById("canvasInventoryHelmSlot" );
        inventoryBackSlotElement  = document.getElementById("canvasInventoryBackSlot" );
        inventoryChestSlotElement = document.getElementById("canvasInventoryChestSlot");
        inventoryFeetSlotElement  = document.getElementById("canvasInventoryFeetSlot" );
        inventoryLegsSlotElement  = document.getElementById("canvasInventoryLegsSlot" );
        inventoryWaistSlotElement = document.getElementById("canvasInventoryWaistSlot");
        inventoryLHandSlotElement = document.getElementById("canvasInventoryLHandSlot");
        inventoryRHandSlotElement = document.getElementById("canvasInventoryRHandSlot");

        //First time setup.
        if (!inventoryHelmSlotElement && !inventoryBackSlotElement && !inventoryChestSlotElement &&
            !inventoryFeetSlotElement && !inventoryLegsSlotElement && !inventoryWaistSlotElement &&
            !inventoryLHandSlotElement && !inventoryRHandSlotElement)
            this.setupInventorySlots(document.getElementById("canvasInventory" ));

        if (inventoryHelmSlotElement)
            this.renderSlot(inventoryHelmSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotHead));

        if (inventoryBackSlotElement)
            this.renderSlot(inventoryBackSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotBack));

        if (inventoryChestSlotElement)
            this.renderSlot(inventoryChestSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotChest));

        if (inventoryFeetSlotElement)
            this.renderSlot(inventoryFeetSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotFeet));       

        if (inventoryLegsSlotElement)
            this.renderSlot(inventoryLegsSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLegs));

        if (inventoryWaistSlotElement)
            this.renderSlot(inventoryWaistSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotWaist));        

        if (inventoryLHandSlotElement)
            this.renderSlot(inventoryLHandSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotLHand)); 

        if (inventoryRHandSlotElement)
            this.renderSlot(inventoryRHandSlotElement, this._player.getItemInSlot(loc.EntityPlayerEquipSlotRHand));

    }
};