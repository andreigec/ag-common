/* eslint-disable no-console */

import { notEmpty } from './array';
import { redactObject } from './string/redact';

export type TLogType = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';
export const GetLogLevel = (l: TLogType) =>
  ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'].findIndex(
    (s) => s === l,
  );

export type TLogShim = (...args: unknown[]) => void;
let logShim: TLogShim | undefined;
/** if passed in, will use this instead of console.xxx */
export const SetLogShim = (ls: TLogShim) => {
  logShim = ls;
};

let userLogLevel: TLogType | undefined;
export const SetLogLevel = (l: TLogType) => {
  const lu = l?.toUpperCase() as TLogType;
  if (GetLogLevel(lu) === -1) {
    return;
  }

  userLogLevel = lu;
};

function logprocess(type: TLogType, args: unknown[]) {
  if (!userLogLevel) {
    SetLogLevel(process.env.LOG_LEVEL as TLogType);
  }

  const min = GetLogLevel(userLogLevel ?? 'WARN');
  const typesLogLevel = GetLogLevel(type);

  // env ignores it
  if (typesLogLevel < min) {
    return;
  }

  ////////
  const datetime = new Date().toLocaleTimeString('en-GB');
  const log = [
    `[${datetime}]`,
    type,
    ...args.filter(notEmpty).map((s) => redactObject(s)),
  ];

  if (logShim) {
    logShim(...log);
    return;
  }

  switch (type) {
    case 'TRACE': {
      console.trace(...log);
      break;
    }

    case 'DEBUG': {
      console.debug(...log);
      break;
    }

    case 'INFO': {
      console.log(...log);
      break;
    }

    case 'WARN': {
      console.warn(...log);
      break;
    }

    case 'ERROR': {
      console.error(...log);
      break;
    }

    case 'FATAL': {
      console.error(...log);
      break;
    }

    default: {
      console.log(...log);
      break;
    }
  }
}

function printStackTrace(...args: undefined[]) {
  const callstack: string[] = [];
  let isCallstackPopulated = false;

  try {
    throw new Error('Test');
  } catch (e) {
    const er = e as Error;
    if (er.stack) {
      // Firefox / chrome
      const lines = er.stack.split('\n');

      for (let i = 0, len = lines.length; i < len; i += 1) {
        callstack.push(` ${lines[i]} `);
      }

      // Remove call to logStackTrace()
      callstack.shift();
      isCallstackPopulated = true;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } else if (window.opera && er.message) {
      // Opera
      const lines = er.message.split('\n');

      for (let i = 0, len = lines.length; i < len; i += 1) {
        if (lines[i].match(/^\s*[A-Za-z0-9\-_$]+\(/)) {
          let entry = lines[i];

          // Append next line also since it has the file info
          if (lines[i + 1]) {
            entry += ` at ${lines[i + 1]}`;
            i += 1;
          }

          callstack.push(entry);
        }
      }

      // Remove call to logStackTrace()
      callstack.shift();
      isCallstackPopulated = true;
    }
  }

  if (!isCallstackPopulated) {
    // IE and Safari
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let currentFunction = args.callee.caller;

    while (currentFunction) {
      const fn = currentFunction.toString();
      const fname =
        fn.substring(fn.indexOf('function') + 8, fn.indexOf('(')) ??
        'anonymous';

      callstack.push(fname);
      currentFunction = currentFunction.caller;
    }
  }

  return callstack.join('\n');
}

export const debug = (...args: unknown[]) => logprocess('DEBUG', args);

export const info = (...args: unknown[]) => logprocess('INFO', args);

export const warn = (...args: unknown[]) => logprocess('WARN', args);

//

export const trace = (...args: unknown[]) => {
  args.push(printStackTrace());
  logprocess('TRACE', args);
};

export const error = (...args: unknown[]) => {
  args.push(printStackTrace());
  logprocess('ERROR', args);
};

export const fatal = (...args: unknown[]) => {
  args.push(printStackTrace());
  logprocess('FATAL', args);
};
