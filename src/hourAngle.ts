import { DEG } from './constants';

export function hourAngle(latitude: number, declination: number) {
  const latitude_rad = latitude * DEG;
  const declination_rad = declination * DEG;
  const numerator =
    -0.01449 - Math.sin(latitude_rad) * Math.sin(declination_rad);
  const denominator = Math.cos(latitude_rad) * Math.cos(declination_rad);
  return Math.acos(numerator / denominator) / DEG;
}
