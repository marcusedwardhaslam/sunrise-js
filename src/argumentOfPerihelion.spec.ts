import { argumentOfPerihelion } from './argumentOfPerihelion';

describe('when using the argumentOfPerihelion module', () => {
  describe('and calculating the argument of periapsis for the earth for the given Julian day', () => {
    it('should return the correct approximation', () => {
      expect(argumentOfPerihelion(2440588)).toBeCloseTo(102.83467, 1);
    });

    it('should return the correct approximation with a modern day', () => {
      expect(argumentOfPerihelion(2459966)).toBeCloseTo(103.00335537562218, 1);
    });
  });
});
