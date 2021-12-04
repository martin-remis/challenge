export const MOBILE_BREAK = 540;
export const WEB_BREAK = 1080;

const breakpoints = [WEB_BREAK, MOBILE_BREAK];

export const mediaQueries = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
