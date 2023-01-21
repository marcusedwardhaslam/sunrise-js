import { DEG } from './constants';

export function solarTransit(
  day: number,
  solarAnomaly: number,
  eclipticLongitude: number
) {
  return (
    day +
    (0.0053 * Math.sin(solarAnomaly * DEG) -
      0.0069 * Math.sin(2 * eclipticLongitude * DEG))
  );
}
