import { declination as declinationFn } from './declination';
import { eclipticLongitude as eclipticLongitudeFn } from './eclipticLongitude';
import { equationOfCentre as equationOfCentreFn } from './equationOfCentre';
import { hourAngle as hourAngleFn } from './hourAngle';
import { julianToUnix } from './julian';
import { meanSolarTime } from './meanSolarTime';
import { solarMeanAnomaly } from './solarMeanAnomaly';
import { solarTransit as solarTransitFn } from './solarTransit';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface TwilightObject {
  sunrise: Date;
  sunset: Date;
}

export function twilight(coords: Coordinates, date: Date): TwilightObject {
  date.setUTCHours(12, 0, 0, 0);
  const day = meanSolarTime(coords.longitude, date.getTime() / 1000);
  const solarAnomaly = solarMeanAnomaly(day);
  const equationOfCentre = equationOfCentreFn(solarAnomaly);
  const eclipticLongitude = eclipticLongitudeFn(
    solarAnomaly,
    equationOfCentre,
    day
  );
  const solarTransit = solarTransitFn(day, solarAnomaly, eclipticLongitude);
  const declination = declinationFn(eclipticLongitude);
  const hourAngle = hourAngleFn(coords.latitude, declination);
  const frac = hourAngle / 360;
  const sunrise = solarTransit - frac;
  const sunset = solarTransit + frac;
  return {
    sunrise: new Date(julianToUnix(sunrise) * 1000),
    sunset: new Date(julianToUnix(sunset) * 1000),
  };
}
