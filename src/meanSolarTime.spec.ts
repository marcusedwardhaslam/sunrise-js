import { meanSolarTime } from './meanSolarTime';

describe('when using the meanSolarTime module', () => {
  describe('and calculating when time the sun was at its highest point', () => {
    it('should return the correct julian time for the unix epoch at the meridian', () => {
      const unixTimestamp = new Date('1970-01-01 13:00:00');
      const result = meanSolarTime(0, unixTimestamp.getTime() / 1000);
      expect(result).toBeCloseTo(2440588);
    });

    it('should return the correct julian time for the 21st January 2023 at the meridian', () => {
      const unixTimestamp = new Date('2023-01-21 13:00:00');
      const result = meanSolarTime(0, unixTimestamp.getTime() / 1000);
      expect(result).toBeCloseTo(2459966, 1);
    });
  });
});
