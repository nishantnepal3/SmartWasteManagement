class RecyclingFacility {
    id: string;
    location: string;
    recyclingCapacity: number;
    recyclingEfficiency: number;
  
    constructor(id: string, location: string, recyclingCapacity: number, recyclingEfficiency: number) {
      this.id = id;
      this.location = location;
      this.recyclingCapacity = recyclingCapacity;
      this.recyclingEfficiency = recyclingEfficiency;
    }
  
    sortWaste(): void {
      console.log(`Recycling facility ${this.id} is sorting waste.`);
    }
  
    trackRecyclables(): void {
      console.log(`Tracking recyclables at facility ${this.id}.`);
    }
  }
  