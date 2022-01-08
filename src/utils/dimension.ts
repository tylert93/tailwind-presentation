const base = require('../../theme/baseUnit');

const dimension = (
  num1: number,
  num2?: number,
  num3?: number,
  num4?: number
) => {
  const one = num1 * base;
  let two;
  let three;
  let four;

  if (num2) {
    two = num2 * base;
  }

  if (num3) {
    three = num3 * base;
  }

  if (num4) {
    four = num4 * base;
  }

  if (one && two && three && four) {
    return `${one}px ${two}px ${three}px ${four}px`;
  } else if ((one && two) || (one && two && three)) {
    return `${one}px ${two}px`;
  } else {
    return one;
  }
};

export default dimension;
