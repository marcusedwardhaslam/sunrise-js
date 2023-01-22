# sunrise-js

Based on [the sunrise equation](https://en.wikipedia.org/wiki/Sunrise_equation#Complete_calculation_on_Earth) calculates a Javascript UTC Date approximating when sunrise and sunset will happen based on a specified latitude, longitude and Javascript Date.

Largely inspired by this [rust-sunrise crate](https://github.com/nathan-osman/rust-sunrise).

## Usage

```javascript
const twilight = require('sunrise-js');
const { sunrise, sunset } = twilight(
    { latitude: 0, longitude: 0 },
    new Date('2023-02-10')
);
```
