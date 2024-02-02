import { assert } from 'console';

import { debug, SetLogLevel, warn } from '../log';
import { redactObject, redactString } from './redact';

assert(redactString('ab grant_typesdadas ') === 'ab <redacted> ');

const ob = {
  accessToken:
    'eyJraWQiOiJkWFpONmY3M.eyJraWQiOiJkWFpONmY3M.eyJraWQiOiJkWFpONmY3M',
  idToken: 'eyJraWQiOiJhODBQZDNCR.eyJraWQiOiJkWFpONmY3M.eyJraWQiOiJkWFpONmY3M',
  refreshToken:
    'eyJjdHkiOiJKV1QiLCJlbA.eyJraWQiOiJkWFpONmY3M.eyJraWQiOiJkWFpONmY3M',
  expiresAt: 1709455716,
  e: 'dawdwaa2ada.ad2dafga2da.gf2adaga2',
};
const a = JSON.stringify(redactObject(ob));
const b = JSON.stringify({
  accessToken: '<redacted>',
  idToken: '<redacted>',
  refreshToken: '<redacted>',
  expiresAt: 1709455716,
  e: 'dawdwaa2ada.ad2dafga2da.gf2adaga2',
});
warn(`testing =\n${a}\n${b}`);
assert(a === b, 'fail');
SetLogLevel('TRACE');
debug(ob);
