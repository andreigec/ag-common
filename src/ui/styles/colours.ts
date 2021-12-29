import { clamp } from "../../common/helpers/math";

export const colours = {
  mainLight: 'rgb(255,255,255)',
  lightest: 'rgb(247,247,247)',
  darker: 'rgb(0,0,0,0.1)',
  lighter: 'rgb(234,234,234)',
  dark: 'rgb(23,25,23)',
  charcoal: 'rgb(50,50,50)',
  lightCharcoal: 'rgb(154,154,154)',
  orangeRed: '#d65873',
  orange: '#e88070',
  yellow: 'rgb(255,206,109)',
  lightBlue: 'rgb(90,129,255)',
  lightGreen: 'rgb(75,236,120)',
  lightGreen2: 'rgb(14, 165, 0)',
  darkGreen: '#228B22',
  peach: 'rgb(245,169,169)',
  purple: 'rgb(173,121,255)',
  notificationBlue: '#4d76ff',
  notificationBlue2: '#002ab3',
  notificationBlue3: 'rgb(230,238,246)',
  gradient: '---generated---',
};

const gradgen = (left: string, right: string) =>
  `linear-gradient(to right, ${left}, ${right})`;

colours.gradient = gradgen(colours.orangeRed, colours.orange);

export const colourWheel: string[] = [
  'rgb(11,132,165)',
  'rgb(246,200,95)',
  'rgb(111,78,124)',
  'rgb(157,216,102)',
  'rgb(202,71,47)',
  'rgb(255,160,86)',
  'rgb(141,221,208)',
];

export const getColourWheel = (i: number) =>
  colourWheel[i % colourWheel.length];

export const rgbVariation = (rgb: string, diff: number) => {
  const nums = rgb.match(/[0-9]+/gi);
  if (!nums || (nums.length !== 3 && nums.length !== 4)) {
    return rgb;
  }

  const nums2 = nums.map((n) =>
    clamp({ value: Number(n) + diff, min: 0, max: 255 }),
  );

  if (nums2.length === 3) {
    return `rgb(${nums2.join(',')})`;
  }

  return `rgba(${nums2.join(',')})`;
};
