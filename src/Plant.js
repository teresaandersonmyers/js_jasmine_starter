"use strict";
function Plant(type, minWaterCountForHarvest) {
	this.type = type;
	this.isSown = false;
	this.isHarvested = false;
	this.minWaterCountForHarvest = minWaterCountForHarvest;
}

Plant.prototype.sow = function() {
	this.isSown = true;
}

Plant.prototype.water = function() {
	if (!this.waterCount) {
		this.waterCount = 0;
	}

	this.waterCount += 1;
}

Plant.prototype.harvest = function() {
	if (!this.waterCount) {
		this.waterCount = 0;
	} 
	if (this.waterCount > 5) {
		this.isHarvested = true;
		return true;
	}
	return false;
}
