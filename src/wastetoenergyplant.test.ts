import { WasteToEnergyPlant } from './wastetoenergyplant';

describe('WasteToEnergyPlant', () => {
  let plant: WasteToEnergyPlant;

  beforeEach(() => {
    plant = new WasteToEnergyPlant('PLANT001', 'Industrial Zone', 5000, 120);
  });

  describe('Constructor', () => {
    it('should initialize with the correct properties', () => {
      expect(plant.id).toBe('PLANT001');
      expect(plant.location).toBe('Industrial Zone');
      expect(plant.energyOutput).toBe(5000);
      expect(plant.emissionLevels).toBe(120);
    });
  });

  describe('convertWasteToEnergy', () => {
    it('should log the correct energy conversion message', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      plant.convertWasteToEnergy();
      expect(consoleSpy).toHaveBeenCalledWith('Waste at plant PLANT001 converted to 5000 kWh of energy.');
      consoleSpy.mockRestore();
    });
  });

  describe('monitorEmissions', () => {
    it('should log the correct emissions monitoring message', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      plant.monitorEmissions();
      expect(consoleSpy).toHaveBeenCalledWith('Monitoring emissions at plant PLANT001: 120 ppm.');
      consoleSpy.mockRestore();
    });
  });
});
