import { solarTransit } from './solarTransit';

describe('when using the solarTransit module', () => {
  describe('and calculating the Julian day for the solar transit', () => {
    it('should return the correct approximation', () => {
      expect(solarTransit(2440588, 358.30683, 281.08372)).toBeCloseTo(
        2440588.00245,
        1
      );
    });

    it('should return the correct approximation with the modern time', () => {
      expect(
        solarTransit(2459966, 17.268708539295403, 300.85205346077055)
      ).toBeCloseTo(2459966.0076488513, 1);
    });
  });
});
