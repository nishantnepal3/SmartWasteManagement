class SmartWasteBin {
  id: string;
  location: string;
  fillLevel: number;
  compactionStatus: boolean;
  wasteType: string;
  solarPowerStatus: boolean;

  constructor(id: string, location: string, fillLevel: number, wasteType: string, solarPowerStatus: boolean) {
    this.id = id;
    this.location = location;
    this.fillLevel = fillLevel;
    this.compactionStatus = false;
    this.wasteType = wasteType;
    this.solarPowerStatus = solarPowerStatus;
  }

  compact(): void {
    this.compactionStatus = true;
    console.log(`Compacting waste for bin ${this.id}`);
  }

  sendFillLevelData(): void {
    console.log(`Bin ${this.id} at ${this.location} is ${this.fillLevel}% full.`);
  }
}
