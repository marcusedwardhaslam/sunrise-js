import { argumentOfPerihelion } from './argumentOfPerihelion';

export function eclipticLongitude(
  solarAnomaly: number,
  equationOfCentre: number,
  julianDay: number
) {
  return (
    (solarAnomaly +
      equationOfCentre +
      180 +
      (argumentOfPerihelion(julianDay) % 360) +
      360) %
    360
  );
}
