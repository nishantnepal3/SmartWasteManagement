"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wastecollectionvehicle_1 = require("./wastecollectionvehicle");
describe('WasteCollectionVehicle', () => {
    let vehicle;
    beforeEach(() => {
        vehicle = new wastecollectionvehicle_1.WasteCollectionVehicle('VEH001', 'Garage', 75, 'Route A');
    });
    describe('Constructor', () => {
        it('should initialize with the correct properties', () => {
            expect(vehicle.id).toBe('VEH001');
            expect(vehicle.location).toBe('Garage');
            expect(vehicle.fuelLevel).toBe(75);
            expect(vehicle.route).toBe('Route A');
            expect(vehicle.maintenanceStatus).toBe('Operational');
        });
    });
    describe('optimizeRoute', () => {
        it('should update the route and log the new route', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            vehicle.optimizeRoute('Route B');
            expect(vehicle.route).toBe('Route B');
            expect(consoleSpy).toHaveBeenCalledWith('Optimized route for vehicle VEH001 is now: Route B');
            consoleSpy.mockRestore();
        });
    });
    describe('collectWaste', () => {
        it('should log the waste collection message', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            vehicle.collectWaste();
            expect(consoleSpy).toHaveBeenCalledWith('Vehicle VEH001 is collecting waste along the route: Route A');
            consoleSpy.mockRestore();
        });
    });
});
