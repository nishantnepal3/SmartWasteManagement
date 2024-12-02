"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartWasteBin = void 0;
class SmartWasteBin {
    constructor(id, location, fillLevel, wasteType, solarPowerStatus) {
        this.id = id;
        this.location = location;
        this.fillLevel = fillLevel;
        this.compactionStatus = false;
        this.wasteType = wasteType;
        this.solarPowerStatus = solarPowerStatus;
    }
    compact() {
        this.compactionStatus = true;
        console.log(`Compacting waste for bin ${this.id}`);
    }
    sendFillLevelData() {
        console.log(`Bin ${this.id} at ${this.location} is ${this.fillLevel}% full.`);
    }
}
exports.SmartWasteBin = SmartWasteBin;
