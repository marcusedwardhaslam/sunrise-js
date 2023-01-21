import { declination } from './declination';

describe('when using the declination module', () => {
  describe('and calculating the declination for a longitude', () => {
    it('should return the correct approximation', () => {
      expect(declination(281.08372)).toBeCloseTo(-22.97753, 1);

      expect(declination(300.85205346077055)).toBeCloseTo(
        -19.968317031246563,
        1
      );
    });
  });
});
