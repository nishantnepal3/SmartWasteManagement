"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WasteCollectionVehicle = void 0;
class WasteCollectionVehicle {
    constructor(id, location, fuelLevel, route) {
        this.id = id;
        this.location = location;
        this.fuelLevel = fuelLevel;
        this.route = route;
        this.maintenanceStatus = "Operational";
    }
    optimizeRoute(newRoute) {
        this.route = newRoute;
        console.log(`Optimized route for vehicle ${this.id} is now: ${newRoute}`);
    }
    collectWaste() {
        console.log(`Vehicle ${this.id} is collecting waste along the route: ${this.route}`);
    }
}
exports.WasteCollectionVehicle = WasteCollectionVehicle;
