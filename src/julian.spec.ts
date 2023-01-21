import { julianToUnix, unixToJulian, UNIX_EPOCH_IN_JULIAN } from './julian';

describe('when using the julian module', () => {
  describe('and converting a unix timestamp to a julian date', () => {
    it('should return the correct julian date for the unix epoch', () => {
      expect(unixToJulian(0)).toEqual(UNIX_EPOCH_IN_JULIAN);
    });
  });

  describe('and converting a julian date to a unix timestamp', () => {
    it('should return 0 for the unix epoch', () => {
      expect(julianToUnix(UNIX_EPOCH_IN_JULIAN)).toEqual(0);
    });

    it('should return the correct timestamp for the modern day', () => {
      expect(julianToUnix(2459966)).toEqual(1674302400);
    });
  });
});
