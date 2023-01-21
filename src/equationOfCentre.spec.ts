import { equationOfCentre } from './equationOfCentre';

describe('when using the equationOfCentre module', () => {
  describe('and calculating the angular difference between the position of earth relative to its circular orbit for a given mean anomaly', () => {
    it('should return the correct difference for a given mean anomaly', () => {
      expect(equationOfCentre(358.30683)).toBeCloseTo(-0.05778);
    });

    it('should return the correct difference for a given mean anomaly in modern times', () => {
      expect(equationOfCentre(18.25465816)).toBeCloseTo(0.6119380022464812);
    });
  });
});
