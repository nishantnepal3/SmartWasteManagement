"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WasteManagementSystem = void 0;
class WasteManagementSystem {
    constructor(totalWasteCollected, recycledWastePercentage) {
        this.totalWasteCollected = totalWasteCollected;
        this.recycledWastePercentage = recycledWastePercentage;
    }
    optimizeCollection() {
        console.log("Optimizing waste collection routes...");
    }
    analyzeWasteData() {
        console.log(`Analyzing data: Total waste collected = ${this.totalWasteCollected} tons.`);
    }
}
exports.WasteManagementSystem = WasteManagementSystem;
