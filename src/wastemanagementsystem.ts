export class WasteManagementSystem {
    totalWasteCollected: number;
    recycledWastePercentage: number;
  
    constructor(totalWasteCollected: number, recycledWastePercentage: number) {
      this.totalWasteCollected = totalWasteCollected;
      this.recycledWastePercentage = recycledWastePercentage;
    }
  
    optimizeCollection(): void {
      console.log("Optimizing waste collection routes...");
    }
  
    analyzeWasteData(): void {
      console.log(`Analyzing data: Total waste collected = ${this.totalWasteCollected} tons.`);
    }
  }
  