export const vSmallScreenPx = 500;
export const smallScreenPx = 1024;
export const bigScreenPx = 2000;

/** use in media query: @ media ${condition} */
export const vSmallScreen = `(max-width: ${vSmallScreenPx}px)`;

/** use in media query: @ media ${condition} */
export const smallScreen = `(max-width: ${smallScreenPx}px)`;

/** use in media query: @ media ${condition} */
export const bigScreen = `(min-width: ${smallScreenPx}px)`;

/** use in media query: @ media ${condition} */
export const vBigScreen = `(min-width: ${bigScreenPx}px)`;
