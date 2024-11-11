# SmartWasteManagement

# SmartWasteManagement

**SmartWasteManagement** is an eco-friendly waste management system implemented in TypeScript, designed to optimize waste collection, recycling, and energy production. The system integrates various components such as waste-to-energy plants, smart waste bins, waste collection vehicles, recycling facilities, and citizen involvement through reporting issues and earning green points.

## Features

- **Waste-to-Energy Plant**: Converts waste into energy while monitoring emissions.
- **Waste Management System**: Optimizes waste collection routes and analyzes waste data.
- **Waste Collection Vehicle**: Collects waste, optimizes routes, and tracks fuel levels.
- **Smart Waste Bin**: Uses solar power to monitor and compact waste, and provides fill-level data.
- **Recycling Facility**: Sorts waste and tracks recyclables.
- **Citizen Involvement**: Citizens can report issues and earn green points for contributing to waste management efforts.

## Components

### 1. **WasteToEnergyPlant (`wastetoenergyplant.ts`)**
The `WasteToEnergyPlant` class represents a plant that converts waste into energy while monitoring the emission levels.

- **Constructor**: Initializes the plant with an ID, location, energy output (kWh), and emission levels (ppm).
- **Methods**:
  - `convertWasteToEnergy()`: Converts waste into energy and logs the energy output.
  - `monitorEmissions()`: Logs the emission levels at the plant.

### 2. **WasteManagementSystem (`wastemanagementsystem.ts`)**
The `WasteManagementSystem` class manages the collection and recycling of waste.

- **Constructor**: Initializes with the total waste collected and the percentage of waste recycled.
- **Methods**:
  - `optimizeCollection()`: Optimizes waste collection routes.
  - `analyzeWasteData()`: Analyzes waste collection data.

### 3. **WasteCollectionVehicle (`wastecollectionvehicle.ts`)**
The `WasteCollectionVehicle` class represents a vehicle that collects waste along specified routes.

- **Constructor**: Initializes the vehicle with an ID, location, fuel level, and route.
- **Methods**:
  - `optimizeRoute(newRoute: string)`: Optimizes the vehicle's route.
  - `collectWaste()`: Collects waste along the route.

### 4. **SmartWasteBin (`SmartWasteBin.ts`)**
The `SmartWasteBin` class represents a smart bin that can compact waste, monitor fill levels, and use solar power for its operations.

- **Constructor**: Initializes with an ID, location, fill level, waste type, and solar power status.
- **Methods**:
  - `compact()`: Compacts the waste in the bin.
  - `sendFillLevelData()`: Sends the fill level data of the bin.

### 5. **RecyclingFacility (`SmartWasteBin.ts`)**
The `RecyclingFacility` class manages the sorting and tracking of recyclables.

- **Constructor**: Initializes with an ID, location, recycling capacity, and efficiency.
- **Methods**:
  - `sortWaste()`: Sorts the waste in the facility.
  - `trackRecyclables()`: Tracks the recyclables in the facility.

### 6. **Citizen (`citizen.ts`)**
The `Citizen` class represents an individual who can report issues and earn green points.

- **Constructor**: Initializes with an ID, name, email, and green points.
- **Methods**:
  - `reportIssue(issue: string)`: Allows the citizen to report issues.
  - `earnGreenPoints(points: number)`: Allows the citizen to earn green points.

### 7. **JSON Schema (`jsonschema.json`)**
The `jsonschema.json` file defines the structure and validation rules for various components like smart waste bins, waste collection vehicles, recycling facilities, and citizens.

## Example Usage

Below is an example of how to use some of the components in the system:

```typescript
// Create a new WasteToEnergyPlant instance
const plant = new WasteToEnergyPlant('1', 'Plant Location', 500, 20);
plant.convertWasteToEnergy();
plant.monitorEmissions();

// Create a new WasteManagementSystem instance
const wasteSystem = new WasteManagementSystem(1000, 75);
wasteSystem.optimizeCollection();
wasteSystem.analyzeWasteData();

// Create a new Citizen instance
const citizen = new Citizen('123', 'John Doe', 'john@example.com');
citizen.reportIssue('Trash bin overflow');
citizen.earnGreenPoints(10);


Testing with Jest
This project uses Jest as the testing framework with TypeScript support to ensure the reliability and correctness of the system components. Below is an overview of how the testing framework is set up.

Project Setup for Testing
The testing framework is configured with ts-jest for TypeScript, and Babel for environment compatibility. The test files are placed under the src/models/__tests__ directory.

Steps to Setup and Run Tests
Create Project Structure: The following directories and files are created to organize the testing setup:

bash
Copy code
.\jest-demo
└───src
    └───models
        └───__tests__
Initialize npm and Install Dependencies: Install the necessary packages to enable Jest, TypeScript, and Babel support:

bash
Copy code
npm init -y
npm install --save-dev jest typescript ts-jest @types/jest
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript
Create jest.config.js: A Jest configuration file is created with the following setup for TypeScript and Babel:

js
Copy code
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
Create a Sample TypeScript File (calculator.ts): A basic Calculator class is implemented in the src/models/calculator.ts file with methods like add, subtract, multiply, and divide.

Write Test Cases (calculator.test.ts): A sample test case is written for the Calculator class, with tests for addition and division, including handling division by zero.

Run Tests: You can run the tests by using the following npm command:

bash
Copy code
npm test
Example Test File (calculator.test.ts)
typescript
Copy code
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

The Jest-Demo folder demonstrates how to set up and run unit tests using Jest for testing TypeScript code. It includes a simple example of how the Calculator class is tested for basic operations like addition, subtraction, multiplication, and division.

File Structure:
perl
Copy code
jest-demo/
  ├── calculator.test.ts        # Jest test cases for the Calculator class
  ├── calculator.ts             # TypeScript implementation of the Calculator class
  ├── jest.config.js            # Jest configuration file for TypeScript support
  ├── package-lock.json         # Automatically generated file to lock the dependencies
  └── package.json              # Defines the dependencies and scripts for running tests
File Descriptions:
calculator.test.ts: This file contains Jest test cases for the Calculator class. The tests include:

add: Verifies that two positive numbers add correctly and that the method handles negative numbers.

divide: Verifies that division is performed correctly, and checks for error handling when dividing by zero.

Example of calculator.test.ts:

typescript
Copy code
import { Calculator } from './calculator';

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
calculator.ts: This file contains the implementation of the Calculator class. The class includes methods for basic arithmetic operations:

add(a, b): Adds two numbers.

subtract(a, b): Subtracts the second number from the first.

multiply(a, b): Multiplies two numbers.

divide(a, b): Divides the first number by the second, with error handling for division by zero.

Example of calculator.ts:

typescript
Copy code
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
      throw new Error("Division by zero");
    }
    return a / b;
  }
}
jest.config.js: The Jest configuration file for setting up Jest with TypeScript. It includes configuration to run tests with the ts-jest transformer and specifies where to find the tests.

Example of jest.config.js:

javascript
Copy code
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
package.json: Defines the dependencies and scripts for running the tests. It includes the required dependencies for Jest, TypeScript, and ts-jest. The script "test" can be used to run tests using Jest, and additional scripts for coverage and watching tests are also available.

Example of package.json:

json
Copy code
{
  "name": "jest-demo",
  "version": "1.0.0",
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "devDependencies": {
    "@types/jest": "^29.5.14",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    "typescript": "^5.6.3"
  }The Jest-Demo folder demonstrates how to set up and run unit tests using Jest for testing TypeScript code. It includes a simple example of how the Calculator class is tested for basic operations like addition, subtraction, multiplication, and division.

File Structure:
perl
Copy code
jest-demo/
  ├── calculator.test.ts        # Jest test cases for the Calculator class
  ├── calculator.ts             # TypeScript implementation of the Calculator class
  ├── jest.config.js            # Jest configuration file for TypeScript support
  ├── package-lock.json         # Automatically generated file to lock the dependencies
  └── package.json              # Defines the dependencies and scripts for running tests
File Descriptions:
calculator.test.ts: This file contains Jest test cases for the Calculator class. The tests include:

add: Verifies that two positive numbers add correctly and that the method handles negative numbers.

divide: Verifies that division is performed correctly, and checks for error handling when dividing by zero.

Example of calculator.test.ts:

typescript
Copy code
import { Calculator } from './calculator';

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
calculator.ts: This file contains the implementation of the Calculator class. The class includes methods for basic arithmetic operations:

add(a, b): Adds two numbers.

subtract(a, b): Subtracts the second number from the first.

multiply(a, b): Multiplies two numbers.

divide(a, b): Divides the first number by the second, with error handling for division by zero.

Example of calculator.ts:

typescript
Copy code
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
      throw new Error("Division by zero");
    }
    return a / b;
  }
}
jest.config.js: The Jest configuration file for setting up Jest with TypeScript. It includes configuration to run tests with the ts-jest transformer and specifies where to find the tests.

Example of jest.config.js:

javascript
Copy code
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
package.json: Defines the dependencies and scripts for running the tests. It includes the required dependencies for Jest, TypeScript, and ts-jest. The script "test" can be used to run tests using Jest, and additional scripts for coverage and watching tests are also available.

Example of package.json:

json
Copy code
{
  "name": "jest-demo",
  "version": "1.0.0",
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "devDependencies": {
    "@types/jest": "^29.5.14",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    "typescript": "^5.6.3"
  }
}
};