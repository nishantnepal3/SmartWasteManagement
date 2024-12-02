"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecyclingFacility = void 0;
class RecyclingFacility {
    constructor(id, location, recyclingCapacity, recyclingEfficiency) {
        this.id = id;
        this.location = location;
        this.recyclingCapacity = recyclingCapacity;
        this.recyclingEfficiency = recyclingEfficiency;
    }
    sortWaste() {
        console.log(`Recycling facility ${this.id} is sorting waste.`);
    }
    trackRecyclables() {
        console.log(`Tracking recyclables at facility ${this.id}.`);
    }
}
exports.RecyclingFacility = RecyclingFacility;
