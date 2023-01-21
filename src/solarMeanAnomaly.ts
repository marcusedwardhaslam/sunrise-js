const JULIAN_JAN_FIRST_2000 = 2451545;

function mod(a: number, b: number): number {
  const result = a % b;
  return result > 0 ? result : result + b;
}

export function solarMeanAnomaly(julianDay: number): number {
  return mod(357.5291 + 0.98560028 * (julianDay - JULIAN_JAN_FIRST_2000), 360);
}
