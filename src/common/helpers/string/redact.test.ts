import { assert } from 'console';

import { warn } from '../log';
import { redactObject, redactString } from './redact';

assert(redactString('ab grant_typesdadas ') === 'ab <redacted> ');

const a = JSON.stringify(
  redactObject({
    a: 1,
    b: 'Bearer abc',
    c: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c ',
    d: 'grant_typeadsadsads',
    e: 'dawdwaa2ada.ad2dafga2da.gf2adaga2',
  }),
);
const b = JSON.stringify({
  a: 1,
  b: '<redacted>',
  c: '<redacted> ',
  d: '<redacted>',
  e: 'dawdwaa2ada.ad2dafga2da.gf2adaga2',
});
warn(`testing =\n${a}\n${b}`);
assert(a === b, 'fail');
