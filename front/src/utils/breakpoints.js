const breakpoints = [540, 1080];

export const mediaQueries = breakpoints.map((bp) => {
    return `@media (min-width: ${bp}px)`;
});