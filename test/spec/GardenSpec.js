describe("Garden", function() {
	it("Adds a plant to the garden when a new plant is sown", function() {
		var garden = new Garden();
		var plant = new Plant("pea", 5);
		garden.sow(plant);

		expect(garden.plants.length).toBe(1);
		expect(plant.isSown).toBe(true);
	});

	it("Can hold multiple plants", function() {
		var garden = new Garden();
		var plant1 = new Plant("pea", 5);
		var plant2 = new Plant("carrot", 5);
		var plant3 = new Plant("corn", 5);
		garden.sow(plant1);
		garden.sow(plant2);
		garden.sow(plant3);

		expect(garden.plants.length).toBe(3);
		expect(plant1.isSown).toBe(true);
		expect(plant2.isSown).toBe(true);
		expect(plant3.isSown).toBe(true);
	});

	it("Can harvest the most recent plant if it has been watered more than its minimum water to harvest count", function() {
		var garden = new Garden();
		var plant1 = new Plant("pea", 5);
		var plant2 = new Plant("carrot", 5);
		var plant3 = new Plant("corn", 5);
		garden.sow(plant1);
		garden.sow(plant2);
		garden.sow(plant3);

		garden.water();
		garden.water();
		garden.water();
		garden.water();
		garden.water();
		garden.water();

		var harvestedPlant = garden.harvestOne();

		expect(garden.plants.length).toBe(2);
		expect(plant1.isSown).toBe(true);
		expect(plant2.isSown).toBe(true);
		expect(plant3.isSown).toBe(true);
		expect(plant1.isHarvested).toBe(true);
		expect(harvestedPlant).toBe(plant1);
	});

	it("Cannot harvest a plant that has not been watered more than its minimum water to harvest count", function() {
		var garden = new Garden();
		var plant = new Plant("pea", 5);
		garden.sow(plant);

		var harvestedPlant = garden.harvestOne();

		expect(garden.plants.length).toBe(1);
		expect(plant.isSown).toBe(true);
		expect(harvestedPlant).toBe(undefined);
		expect(plant.isHarvested).toBe(false);
	});

	it("is set back to not isPlanted if all of the plants are harvested", function() {
		var garden = new Garden();
		var plant = new Plant("pea", 5);
		garden.sow(plant);

		garden.water();
		garden.water();
		garden.water();
		garden.water();
		garden.water();
		garden.water();

		var harvestedPlants = garden.harvestAll();

		expect(garden.plants.length).toBe(0);
		expect(garden.isPlanted).toBe(false);
		expect(plant.isSown).toBe(true);
		expect(harvestedPlants.length).toBe(1);
		expect(harvestedPlants[0]).toBe(plant);
		expect(plant.isHarvested).toBe(true);
	});

	it("Cannot harvest the most recent plant if it has not been watered more than its minimum water to harvest count", function() {
		var garden = new Garden();
		var plant1 = new Plant("pea", 5);
		var plant2 = new Plant("carrot", 5);
		var plant3 = new Plant("corn", 5);
		garden.sow(plant1);
		garden.sow(plant2);
		garden.sow(plant3);

		garden.water();
		garden.water();
		garden.water();
		garden.water();

		var harvestedPlant = garden.harvestOne();

		expect(garden.plants.length).toBe(3);
		expect(plant1.isSown).toBe(true);
		expect(plant2.isSown).toBe(true);
		expect(plant3.isSown).toBe(true);
		expect(plant1.isHarvested).toBe(false);
		expect(harvestedPlant).toBe(undefined);
	});

	it("Can harvest the all plants that have been watered more than their minimum water to harvest count", function() {
		var garden = new Garden();
		var plant1 = new Plant("pea", 5);
		var plant2 = new Plant("carrot", 5);
		var plant3 = new Plant("corn", 5);
		garden.sow(plant1);
		garden.sow(plant2);
		garden.sow(plant3);

		garden.water();
		garden.water();
		garden.water();

		var plant4 = new Plant("watermelon", 5);
		garden.sow(plant4);

		garden.water();
		garden.water();
		garden.water();

		var harvestedPlants = garden.harvestAll();

		expect(plant1.isSown).toBe(true);
		expect(plant2.isSown).toBe(true);
		expect(plant3.isSown).toBe(true);
		expect(plant4.isSown).toBe(true);

		expect(plant1.isHarvested).toBe(true);
		expect(plant2.isHarvested).toBe(true);
		expect(plant3.isHarvested).toBe(true);
		expect(plant4.isHarvested).toBe(false);

		expect(harvestedPlants.length).toBe(3);
		expect(harvestedPlants[0]).toBe(plant1);
		expect(harvestedPlants[1]).toBe(plant2);
		expect(harvestedPlants[2]).toBe(plant3);

		expect(garden.plants.length).toBe(1);
	});
});
