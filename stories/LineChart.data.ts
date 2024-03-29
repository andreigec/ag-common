import { dayInMs } from '../src/common/helpers/date';

export const colours = {
  'analytica.click': 'rgb(11,132,165)',
  'bollardart.com.au': 'rgb(255,160,86)',
  'common.infra': 'rgb(246,200,95)',
  'eldenring.quest': 'rgb(202,71,47)',
  'gec.dev': 'rgb(141,221,208)',
  'introspect.cloud': 'rgb(111,78,124)',
  'leancoffee.cloud': 'rgb(157,216,102)',
  'mynotes.cloud': 'rgb(11,132,165)',
  'phasmo.app': 'rgb(111,78,124)',
  'priority.quest': 'rgb(202,71,47)',
  'roarcoder.dev': 'rgb(255,160,86)',
  'surveyfoundry.com': 'rgb(141,221,208)',
  'techmer.ch': 'rgb(246,200,95)',
  'updatepackagejson.com': 'rgb(157,216,102)',
  'urls.nz': 'rgb(11,132,165)',
  'webscrape.app': 'rgb(141,221,208)',
};

function convertToMidnight(date: Date): Date {
  // Set the time to midnight (00:00:00)
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}

export const LCD = [
  {
    x: 1707566400000,
    y: 6,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1707652800000,
    y: 13,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 3,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 3,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1707912000000,
    y: 4,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1707998400000,
    y: 5,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 1,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708171200000,
    y: 8,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 1,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 3,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 3,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 8,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 3,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 8,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708776000000,
    y: 2,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 9,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 16,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1709035200000,
    y: 9,
    name: 'analytica.click',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 10,
    name: 'analytica.click',
    rollup: false,
  },
  {
    x: 1709211600000,
    y: 13,
    name: 'analytica.click',
    rollup: false,
  },
  {
    x: 1707566400000,
    y: 3,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1707652800000,
    y: 8,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 5,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 4,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1707912000000,
    y: 4,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1707998400000,
    y: 5,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 5,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708171200000,
    y: 9,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 6,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 5,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 11,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 9,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 4,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 7,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708776000000,
    y: 6,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 11,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 8,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1709035200000,
    y: 3,
    name: 'techmer.ch',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 2,
    name: 'techmer.ch',
    rollup: false,
  },
  {
    x: 1709211600000,
    y: 3,
    name: 'techmer.ch',
    rollup: false,
  },
  {
    x: 1707566400000,
    y: 3,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 1,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708171200000,
    y: 2,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 12,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 8,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 8,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 3,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 8,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 4,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708776000000,
    y: 1,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 2,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 2,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1709035200000,
    y: 2,
    name: 'gec.dev',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 1,
    name: 'gec.dev',
    rollup: false,
  },
  {
    x: 1709211600000,
    y: 1,
    name: 'gec.dev',
    rollup: false,
  },
  {
    x: 1707566400000,
    y: 9,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1707652800000,
    y: 16,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 10,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 17,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1707912000000,
    y: 13,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1707998400000,
    y: 6,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 15,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708171200000,
    y: 14,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 7,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 2,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 16,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 22,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 28,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 34,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708776000000,
    y: 49,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 23,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 31,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1709035200000,
    y: 34,
    name: 'eldenring.quest',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 24,
    name: 'eldenring.quest',
    rollup: false,
  },
  {
    x: convertToMidnight(new Date()).getTime() + dayInMs,
    y: 45,
    name: 'eldenring.quest',
    rollup: false,
  },
  {
    x: 1707566400000,
    y: 2,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1707652800000,
    y: 1,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 3,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1707912000000,
    y: 5,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1707998400000,
    y: 5,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 3,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708171200000,
    y: 2,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 6,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 1,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 4,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 3,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 1,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 5,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 3,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 3,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1709035200000,
    y: 1,
    name: 'phasmo.app',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 1,
    name: 'phasmo.app',
    rollup: false,
  },
  {
    x: 1709211600000,
    y: 3,
    name: 'phasmo.app',
    rollup: false,
  },
  {
    x: 1707566400000,
    y: 5,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1707652800000,
    y: 20,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 14,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 26,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1707912000000,
    y: 37,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1707998400000,
    y: 28,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 15,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708171200000,
    y: 7,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 10,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 19,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 22,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 17,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 16,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 18,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708776000000,
    y: 15,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 17,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 26,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1709035200000,
    y: 15,
    name: 'updatepackagejson.com',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 6,
    name: 'updatepackagejson.com',
    rollup: false,
  },
  {
    x: 1709211600000,
    y: 14,
    name: 'updatepackagejson.com',
    rollup: false,
  },
  {
    x: 1707652800000,
    y: 1,
    name: 'priority.quest',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 1,
    name: 'priority.quest',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 1,
    name: 'priority.quest',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 1,
    name: 'priority.quest',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 1,
    name: 'priority.quest',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 3,
    name: 'priority.quest',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 1,
    name: 'priority.quest',
    rollup: true,
  },
  {
    x: 1707652800000,
    y: 2,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 1,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 1,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1707912000000,
    y: 1,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 1,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 4,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 2,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1708776000000,
    y: 3,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 2,
    name: 'leancoffee.cloud',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 1,
    name: 'leancoffee.cloud',
    rollup: false,
  },
  {
    x: 1709211600000,
    y: 1,
    name: 'leancoffee.cloud',
    rollup: false,
  },
  {
    x: 1707652800000,
    y: 2,
    name: 'surveyfoundry.com',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 1,
    name: 'surveyfoundry.com',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 1,
    name: 'surveyfoundry.com',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 1,
    name: 'surveyfoundry.com',
    rollup: true,
  },
  {
    x: 1709035200000,
    y: 1,
    name: 'surveyfoundry.com',
    rollup: true,
  },
  {
    x: 1707652800000,
    y: 2,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 1,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 2,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 3,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 2,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 1,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1708776000000,
    y: 2,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 1,
    name: 'webscrape.app',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 1,
    name: 'urls.nz',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 3,
    name: 'urls.nz',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 1,
    name: 'urls.nz',
    rollup: true,
  },
  {
    x: 1709211600000,
    y: 1,
    name: 'urls.nz',
    rollup: false,
  },
  {
    x: 1707739200000,
    y: 2,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1707825600000,
    y: 2,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1707912000000,
    y: 1,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1707998400000,
    y: 4,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708084800000,
    y: 1,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708257600000,
    y: 1,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708430400000,
    y: 1,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 2,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708603200000,
    y: 1,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708689600000,
    y: 1,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 2,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 2,
    name: 'roarcoder.dev',
    rollup: true,
  },
  {
    x: 1707739200000,
    y: 1,
    name: 'introspect.cloud',
    rollup: true,
  },
  {
    x: 1707998400000,
    y: 1,
    name: 'introspect.cloud',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 4,
    name: 'introspect.cloud',
    rollup: true,
  },
  {
    x: 1709125200000,
    y: 2,
    name: 'introspect.cloud',
    rollup: false,
  },
  {
    x: 1707825600000,
    y: 1,
    name: 'bollardart.com.au',
    rollup: true,
  },
  {
    x: 1708344000000,
    y: 1,
    name: 'bollardart.com.au',
    rollup: true,
  },
  {
    x: 1708516800000,
    y: 2,
    name: 'bollardart.com.au',
    rollup: true,
  },
  {
    x: 1708862400000,
    y: 2,
    name: 'bollardart.com.au',
    rollup: true,
  },
  {
    x: 1708948800000,
    y: 1,
    name: 'bollardart.com.au',
    rollup: true,
  },
];
