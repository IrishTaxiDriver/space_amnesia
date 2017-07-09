// A repository has a name and a constructor. The constructor is used to create
// items in the repository.
Game.Repository = function(name, ctor) {
    this._name = name;
    this._templates = {};
    this._ctor = ctor;
    this._randomTemplates = {};
};

// Define a new named template.
Game.Repository.prototype.define = function(name, template, options) {
    this._templates[name] = template;
    // Apply any options
    var disableRandomCreation = options && options['disableRandomCreation'];
    //Debug.log("Repository: Defining " + this._templates[name].name + " from template. Random Creation = " + disableRandomCreation);
    if (!disableRandomCreation) {
        this._randomTemplates[name] = template;
    }
};

// Create an object based on a template.
Game.Repository.prototype.create = function(name, extraProperties) {
    if (!this._templates[name]) {
        throw new Error(this._name + loc.RepositoryNoTemplateFound + name);
    }
    // Copy the template
    var template = Object.create(this._templates[name]);
    Debug.log("Game.Repository.create: Creating " + this._templates[name].name + " from template.");
    // Apply any extra properties
    if (extraProperties) {
        for (var key in extraProperties) {
            template[key] = extraProperties[key];
        }
    }
    // Create the object, passing the template as an argument
    return new this._ctor(template);
};

// Create an object based on a random template
Game.Repository.prototype.createRandom = function() {
    // Pick a random key and create an object based off of it.
    return this.create(Object.keys(this._randomTemplates).random());
};

Game.Repository.prototype.filter = function(key, value) {
    var results = {};
    Debug.log("Game.Repository.filter: Finding entities with [\"" + key + "\"] : \"" + value + "\"");
    for (var obj in this._templates) {
        var values = Object.getOwnPropertyDescriptor(this._templates[obj], key).value;
        //Its an array.
        if (typeof (values) != "string") {
            for (i = 0; i < values.length; i++) {
                if (values[i] == value || values[i] == "any") {
                    results[obj] = this._templates[obj];
                }
            }
        }
        //Its a string.
        else if (typeof (values) == "string") {
            if (values == value) {
                results[obj] = this._templates[obj];
            }
        }
    }
    return results;
};

Game.Repository.prototype.getContainingRepository = function(key, value) {
    //Debug.log("Game.Repository.getContainingRepository: Finding repository with [\"" + key + "\"] : \"" + value + "\"");
    results = Object.keys(this.getFromCriteria(key, value));
    if (results.length != 0)
        return true;
}

Game.Repository.prototype.getFromCriteria = function(key, value) {
    //Debug.log("Game.Repository.getFromCriteria: Evaluating array with [\"" + key + "\"] : \"" + value + "\"");
    return this.filter(key, value);
};

// Create a random object based on the given criteria
Game.Repository.prototype.createRandomFromCriteria = function(key, value) {
    //Debug.log("Game.Repository.createRandomFromCriteria: Creating random thing from criteria [\"" + key + "\"] : \"" + value + "\"");
    return this.create(Object.keys(this.getFromCriteria(key,value)).random());
};