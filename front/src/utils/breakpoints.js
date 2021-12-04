export const MOBILE_BREAK = 540;
export const WEB_BREAK = 1080;
export const MAX_WIDTH_MODAL = 1200;

const breakpoints = [WEB_BREAK, MOBILE_BREAK];

export const mediaQueries = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
