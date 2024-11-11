# Create project structure
New-Item -ItemType Directory -Path ".\jest-demo" -Force
Set-Location -Path ".\jest-demo"
New-Item -ItemType Directory -Path ".\src\models\__tests__" -Force

# Initialize npm and install dependencies
npm init -y
npm install --save-dev jest typescript ts-jest @types/jest
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript

# Create jest.config.js file
@"
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
"@ | Out-File -FilePath "jest.config.js" -Encoding UTF8

# Create calculator.ts file in src\models
@"
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}
"@ | Out-File -FilePath ".\src\models\calculator.ts" -Encoding UTF8

# Create calculator.test.ts file in src\models\__tests__
@"
import { Calculator } from '../calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
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
"@ | Out-File -FilePath ".\src\models\__tests__\calculator.test.ts" -Encoding UTF8

# Verify setup by running tests
npm test
Write-Host "Setup complete! Your Jest testing environment is ready."
