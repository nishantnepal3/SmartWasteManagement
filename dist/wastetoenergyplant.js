"use strict";
class WasteToEnergyPlant {
    constructor(id, location, energyOutput, emissionLevels) {
        this.id = id;
        this.location = location;
        this.energyOutput = energyOutput;
        this.emissionLevels = emissionLevels;
    }
    convertWasteToEnergy() {
        console.log(`Waste at plant ${this.id} converted to ${this.energyOutput} kWh of energy.`);
    }
    monitorEmissions() {
        console.log(`Monitoring emissions at plant ${this.id}: ${this.emissionLevels} ppm.`);
    }
}
