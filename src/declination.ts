import { DEG } from './constants';

export function declination(eclipticLongitude: number) {
  return Math.asin(Math.sin(eclipticLongitude * DEG) * 0.39779) / DEG;
}
