import { hourAngle } from './hourAngle';

describe('when using the hourAngle module', () => {
  describe('and calculating the hour angle from the observers meridian', () => {
    it('should return the correct approximation for a given latitude and declination', () => {
      expect(hourAngle(0, -22.97753)).toBeCloseTo(90.9018, 1);
    });

    it('should return the correct approximation for a given latitude and declination modern times', () => {
      expect(hourAngle(51.5072, -19.968317031246563)).toBeCloseTo(
        64.39689064466585,
        1
      );
    });
  });
});
