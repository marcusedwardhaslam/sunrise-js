import { DEG } from './constants';

export function equationOfCentre(solarAnomaly: number) {
  const anomalyInRad = solarAnomaly * DEG;
  const anomalySin = Math.sin(anomalyInRad);
  const anomalySin2 = Math.sin(anomalyInRad * 2);
  const anomalySin3 = Math.sin(anomalyInRad * 3);
  return 1.9148 * anomalySin + 0.02 * anomalySin2 + 0.0003 * anomalySin3;
}
