import { eclipticLongitude } from './eclipticLongitude';

describe('when using the eclipticLongitude module', () => {
  describe('and calculating the angular difference of the earth around its ecliptic', () => {
    it('should return the correct approximation', () => {
      expect(eclipticLongitude(358.30683, -0.05778, 2440588)).toBeCloseTo(
        281.08372,
        1
      );
    });

    it('should return the correct approximation with modern times', () => {
      expect(
        eclipticLongitude(17.268708539295403, 0.5799895489384146, 2459966)
      ).toBeCloseTo(300.852053463856, 1);
    });
  });
});
