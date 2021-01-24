import {scales} from '../common/constants';

export function kelvin2CAndF(temp, {floor} = {floor: true}) {
  if (!temp) {
    return 273;
  }
  const fahrenheit = (temp - 273.15) * 1.8 + 32;
  const celsius = temp - 273.15;
  return {
    [scales.fahrenheit]: floor ? Math.floor(fahrenheit) : fahrenheit,
    [scales.celsius]: floor ? Math.floor(celsius) : celsius
  };
}
