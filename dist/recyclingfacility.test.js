"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recyclingfacility_1 = require("./recyclingfacility");
describe('RecyclingFacility', () => {
    let facility;
    beforeEach(() => {
        facility = new recyclingfacility_1.RecyclingFacility('123', 'Downtown', 1000, 0.85);
    });
    describe('Constructor', () => {
        it('should initialize with the correct properties', () => {
            expect(facility.id).toBe('123');
            expect(facility.location).toBe('Downtown');
            expect(facility.recyclingCapacity).toBe(1000);
            expect(facility.recyclingEfficiency).toBe(0.85);
        });
    });
    describe('sortWaste', () => {
        it('should log the sorting waste message', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            facility.sortWaste();
            expect(consoleSpy).toHaveBeenCalledWith('Recycling facility 123 is sorting waste.');
            consoleSpy.mockRestore();
        });
    });
    describe('trackRecyclables', () => {
        it('should log the tracking recyclables message', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            facility.trackRecyclables();
            expect(consoleSpy).toHaveBeenCalledWith('Tracking recyclables at facility 123.');
            consoleSpy.mockRestore();
        });
    });
});
