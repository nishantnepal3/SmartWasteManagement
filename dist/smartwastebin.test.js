"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartwastebin_1 = require("./smartwastebin");
describe('SmartWasteBin', () => {
    let bin;
    beforeEach(() => {
        bin = new smartwastebin_1.SmartWasteBin('BIN001', 'Park Entrance', 45, 'Recyclable', true);
    });
    describe('Constructor', () => {
        it('should initialize with the correct properties', () => {
            expect(bin.id).toBe('BIN001');
            expect(bin.location).toBe('Park Entrance');
            expect(bin.fillLevel).toBe(45);
            expect(bin.compactionStatus).toBe(false);
            expect(bin.wasteType).toBe('Recyclable');
            expect(bin.solarPowerStatus).toBe(true);
        });
    });
    describe('compact', () => {
        it('should update compactionStatus to true and log a message', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            bin.compact();
            expect(bin.compactionStatus).toBe(true);
            expect(consoleSpy).toHaveBeenCalledWith('Compacting waste for bin BIN001');
            consoleSpy.mockRestore();
        });
    });
    describe('sendFillLevelData', () => {
        it('should log the fill level data message', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            bin.sendFillLevelData();
            expect(consoleSpy).toHaveBeenCalledWith('Bin BIN001 at Park Entrance is 45% full.');
            consoleSpy.mockRestore();
        });
    });
});
