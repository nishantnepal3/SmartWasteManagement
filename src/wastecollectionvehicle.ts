export class WasteCollectionVehicle {
    id: string;
    location: string;
    fuelLevel: number;
    route: string;
    maintenanceStatus: string;
  
    constructor(id: string, location: string, fuelLevel: number, route: string) {
      this.id = id;
      this.location = location;
      this.fuelLevel = fuelLevel;
      this.route = route;
      this.maintenanceStatus = "Operational";
    }
  
    optimizeRoute(newRoute: string): void {
      this.route = newRoute;
      console.log(`Optimized route for vehicle ${this.id} is now: ${newRoute}`);
    }
  
    collectWaste(): void {
      console.log(`Vehicle ${this.id} is collecting waste along the route: ${this.route}`);
    }
  }
  