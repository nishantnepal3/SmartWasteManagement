"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
describe('Calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new calculator_1.Calculator();
    });
    describe('add', () => {
        it('should add two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });
        it('should handle negative numbers', () => {
            expect(calculator.add(-1, 1)).toBe(0);
        });
    });
    describe('divide', () => {
        it('should divide two numbers', () => {
            expect(calculator.divide(6, 2)).toBe(3);
        });
        it('should throw error on division by zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
        });
    });
});
