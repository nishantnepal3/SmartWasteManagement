class WasteToEnergyPlant {
    id: string;
    location: string;
    energyOutput: number; // in kilowatt-hours
    emissionLevels: number; // in ppm
  
    constructor(id: string, location: string, energyOutput: number, emissionLevels: number) {
      this.id = id;
      this.location = location;
      this.energyOutput = energyOutput;
      this.emissionLevels = emissionLevels;
    }
  
    convertWasteToEnergy(): void {
      console.log(`Waste at plant ${this.id} converted to ${this.energyOutput} kWh of energy.`);
    }
  
    monitorEmissions(): void {
      console.log(`Monitoring emissions at plant ${this.id}: ${this.emissionLevels} ppm.`);
    }
  }
  