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
