import { unixToJulian } from './julian';

export function meanSolarTime(longitude: number, timestamp: number): number {
  return unixToJulian(timestamp) - longitude / 360;
}
