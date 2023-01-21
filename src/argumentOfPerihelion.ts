export function argumentOfPerihelion(julianDay: number) {
  return 102.93005 + (0.3179526 * (julianDay - 2451545)) / 36525;
}
