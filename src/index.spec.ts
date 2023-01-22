import twilight from './';

describe('when using the sunrise/sunset library', () => {
  describe('and attempting to find when the twilight hours are', () => {
    it('should return the correct hours for sunrise and sunset for the unix epoch', () => {
      const results = twilight(
        { latitude: 0, longitude: 0 },
        new Date('1970-01-01T00:00:00+00:00')
      );
      expect(Math.floor(results.sunrise.getTime() / 1000)).toEqual(21594);
      expect(Math.floor(results.sunset.getTime() / 1000)).toEqual(65227);
    });

    it('should return the correct hours for sunrise and sunset for the modern day', () => {
      const results = twilight(
        { latitude: 51.5072, longitude: 0.1276 },
        new Date('2023-01-21T00:00:00+00:00')
      );
      expect(Math.floor(results.sunrise.getTime() / 1000)).toEqual(1674287574);
      expect(Math.floor(results.sunset.getTime() / 1000)).toEqual(1674318485);
    });
  });
});
