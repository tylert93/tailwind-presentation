const Breakpoints = require('../../theme/breakpoints');

const screens: string[] = Object.values(Breakpoints);

export const BreakPoints = screens.map((screen) => parseFloat(screen));

export const mq: { [k: string]: string } = {};

for (const [key, value] of Object.entries(Breakpoints)) {
  mq[`${key}`] = `@media (min-width: ${value})`;
}
