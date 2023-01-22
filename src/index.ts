import { declination as getDeclination } from './declination';
import { eclipticLongitude as getEclipticLongitude } from './eclipticLongitude';
import { equationOfTheCentre } from './equationOfCentre';
import { hourAngle as getHourAngle } from './hourAngle';
import { julianToUnix } from './julian';
import { meanSolarTime as getMeanSolarTime } from './meanSolarTime';
import { solarMeanAnomaly as getSolarMeanAnomaly } from './solarMeanAnomaly';
import { solarTransit as getSolarTransit } from './solarTransit';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface TwilightObject {
  sunrise: Date;
  sunset: Date;
}

export default function twilight(
  coords: Coordinates,
  date: Date
): TwilightObject {
  date.setUTCHours(12, 0, 0, 0);
  const meanSolarTime = getMeanSolarTime(
    coords.longitude,
    date.getTime() / 1000
  );
  const solarAnomaly = getSolarMeanAnomaly(meanSolarTime);
  const equationOfCentre = equationOfTheCentre(solarAnomaly);
  const eclipticLongitude = getEclipticLongitude(
    solarAnomaly,
    equationOfCentre,
    meanSolarTime
  );
  const solarTransit = getSolarTransit(
    meanSolarTime,
    solarAnomaly,
    eclipticLongitude
  );
  const declination = getDeclination(eclipticLongitude);
  const hourAngle = getHourAngle(coords.latitude, declination);
  const frac = hourAngle / 360;
  return {
    sunrise: new Date(julianToUnix(solarTransit - frac) * 1000),
    sunset: new Date(julianToUnix(solarTransit + frac) * 1000),
  };
}

module.exports = twilight;
