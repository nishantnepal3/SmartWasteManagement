import { WasteManagementSystem } from './wastemanagementsystem';

describe('WasteManagementSystem', () => {
  let system: WasteManagementSystem;

  beforeEach(() => {
    system = new WasteManagementSystem(500, 60);
  });

  describe('Constructor', () => {
    it('should initialize with the correct properties', () => {
      expect(system.totalWasteCollected).toBe(500);
      expect(system.recycledWastePercentage).toBe(60);
    });
  });

  describe('optimizeCollection', () => {
    it('should log the optimization message', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      system.optimizeCollection();
      expect(consoleSpy).toHaveBeenCalledWith('Optimizing waste collection routes...');
      consoleSpy.mockRestore();
    });
  });

  describe('analyzeWasteData', () => {
    it('should log the waste analysis message', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      system.analyzeWasteData();
      expect(consoleSpy).toHaveBeenCalledWith('Analyzing data: Total waste collected = 500 tons.');
      consoleSpy.mockRestore();
    });
  });
});
