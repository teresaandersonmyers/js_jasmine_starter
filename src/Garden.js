"use strict";

function Garden() {
}

Garden.prototype.sow = function(plant) {
	if (!this.plants) {
		this.plants = [];
	}
	this.plants.push(plant);
	plant.sow();
	this.isPlanted = true;
};

Garden.prototype.water = function() {
	this.isWatering = true;
	for (var i = 0; i < this.plants.length; i++) {
		this.plants[i].water();
	}
}

Garden.prototype.harvestAll = function() {
	var harvestedPlants = [];
	for (var i = this.plants.length - 1; i >= 0; i--) {
		var plant = this.plants[i];
		if (plant.harvest()) {
			console.log(plant.name);
			harvestedPlants.push(plant);
			this.plants.splice(i, 1);
		}
	}

	if (!this.plants.length) {
		this.isPlanted = false;
	}

	return harvestedPlants.reverse();
}

Garden.prototype.harvestOne = function() {
	for (var i = 0; i < this.plants.length; i++) {
		var plant = this.plants[i];
		if (plant.harvest()) {
			console.log(plant.name);
			this.plants.splice(i, 1);
			return plant;
		}
	}
}

