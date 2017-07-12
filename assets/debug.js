//TODO: Hook up All Seeing.
//TODO: Hook up No Target.
//TODO: Fix teleportTo.

var Debug = {
    enable: false,
    sated: false,
    god: false,
    notarget: false,
    allSeeing : false,
    log: function(msg) {
        if (this.enable) {
                console.log(msg);
        }
    },
    getPlayer: function() {
        return Game._currentScreen._player;
    },
    giveExperience: function(points) {
        var player = Debug.getPlayer();
        player.giveExperience(points);
        Debug.log("Debug.giveExperience: Player given " + points + " experience.");
    },
    giveNextLevel: function() {
        var player = Debug.getPlayer();
        var points = player.getNextLevelExperience() - player._experience;
        player.giveExperience(points);
        Debug.log("Debug.giveNextLevel: Player given next level.");
    },
    givePlayerMaxHealth: function() {
        var player = Debug.getPlayer();
        player.setHP(player.getMaxHp());
        Debug.log("Debug.givePlayerMaxHealth: Player health set to max.");
    },
    resetPlayerHunger: function() {
        var player = Debug.getPlayer();
        player.modifyFullnessBy(player._maxFullness - player._fullness);
        Debug.log("Debug.resetPlayerHunger: Player hunger reset.");
    },
    clearFog: function() {

    },
    omnipotent: function() {

    },
    teleportTo: function(name) {
        if (this.enable) {
            Debug.log("Debug.teleportTo: Trying to teleport to: " + name );
            var player = Debug.getPlayer();
            var map = player.getMap();

            var target = null;

            for (ent in map._entities) {
                if (ent._name == name && ent.getZ() == player.getZ()) {
                    target = ent;
                }
            }

            if (target) {
                player.setX(target.getX() - 1);
                player.setY(target.getY() - 1);
            } else {
                Debug.log("Debug.teleportTo: Target " + name + " not found." );
            }
        }

    },
    spawn: function(name) {
        if (this.enable) {
            Debug.log("Debug.spawn: Trying to spawn: " + name );

            var player = Debug.getPlayer();
            var map = player.getMap();

            if (Game.EntityRepository.getContainingRepository("name", name)) {
                Debug.log("Debug.spawn: Using entity repository.");
                var entity = Game.EntityRepository.create( Object.keys( Game.EntityRepository.getFromCriteria( "name", name ) ) );
                entity.setX(player.getX() - 1);
                entity.setY(player.getY() - 1);
                entity.setZ(player.getZ());
                //must set xyz of entity.
                map.addEntity( entity );
            } else {
                Debug.log("Debug.spawn: Using item repository.");
                map.addItem( player.getX(), player.getY(), player.getZ(),
                    Game.ItemRepository.create( 
                        Object.keys(
                            Game.ItemRepository.getFromCriteria( "name", name ) ) ) );
            }

            Debug.log("Debug.spawn: Spawned: " + name);
        }
    }
};
