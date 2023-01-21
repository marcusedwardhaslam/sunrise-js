import { solarMeanAnomaly } from './solarMeanAnomaly';

describe('when using the solarMeanAnomaly module', () => {
  describe('and calculating the angle of the sun relative to earth for a given julian day', () => {
    it('should return an approximate angle for the unix epoch', () => {
      expect(solarMeanAnomaly(2440588)).toBeCloseTo(358.30683, 1);
    });

    it('should return an approximate angle for the modern day', () => {
      expect(solarMeanAnomaly(2459967)).toBeCloseTo(18.25465815, 1);
    });
  });
});
