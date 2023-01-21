export const NUMBER_OF_SECONDS_IN_DAY = 86400;
export const UNIX_EPOCH_IN_JULIAN = 2440587.5;

export function unixToJulian(unixTimestamp: number): number {
  return unixTimestamp / NUMBER_OF_SECONDS_IN_DAY + UNIX_EPOCH_IN_JULIAN;
}

export function julianToUnix(julianDay: number): number {
  return (julianDay - UNIX_EPOCH_IN_JULIAN) * NUMBER_OF_SECONDS_IN_DAY;
}
