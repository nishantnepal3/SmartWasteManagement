"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const citizen_1 = require("./citizen");
describe('Citizen', () => {
    let citizen;
    beforeEach(() => {
        citizen = new citizen_1.Citizen('1', 'John Doe', 'john@example.com');
    });
    describe('Constructor', () => {
        it('should initialize with the correct properties', () => {
            expect(citizen.id).toBe('1');
            expect(citizen.name).toBe('John Doe');
            expect(citizen.email).toBe('john@example.com');
            expect(citizen.greenPoints).toBe(0);
        });
    });
    describe('reportIssue', () => {
        it('should log the reported issue', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            const issue = 'Broken recycling bin';
            citizen.reportIssue(issue);
            expect(consoleSpy).toHaveBeenCalledWith(`Citizen John Doe reported: ${issue}`);
            consoleSpy.mockRestore();
        });
    });
    describe('earnGreenPoints', () => {
        it('should add points to greenPoints and log the updated total', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            citizen.earnGreenPoints(50);
            expect(citizen.greenPoints).toBe(50);
            expect(consoleSpy).toHaveBeenCalledWith('John Doe earned 50 Green Points. Total: 50');
            consoleSpy.mockRestore();
        });
        it('should accumulate greenPoints over multiple calls', () => {
            citizen.earnGreenPoints(20);
            citizen.earnGreenPoints(30);
            expect(citizen.greenPoints).toBe(50);
        });
    });
});
