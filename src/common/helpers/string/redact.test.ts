import { assert } from 'console';

import { warn } from '../log';
import { redactObject, redactString } from './redact';

assert(redactString('ab grant_typesdadas ') === 'ab <redact> ');

const a = JSON.stringify(
  redactObject({
    a: 1,
    b: 'Bearer dd',
    c: 'eyJadwdaw9dasfga9d ',
    d: 'grant_typeadsadsads',
    e: 'ok',
  }),
);
const b = JSON.stringify({
  a: 1,
  b: '<redact>',
  c: '<redact> ',
  d: '<redact>',
  e: 'ok',
});
warn(`testing =\n${a}\n${b}`);
assert(a === b, 'fail');

warn('ok');
