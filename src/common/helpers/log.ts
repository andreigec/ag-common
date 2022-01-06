/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { notEmpty } from '.';

export type TLogType = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';
export const GetLogLevel = (l: TLogType) =>
  ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'].findIndex(
    (s) => s === l,
  );

let userLogLevel: TLogType = 'WARN';
export const SetLogLevel = (l: string) => {
  const lu = l?.toUpperCase() as TLogType;
  if (GetLogLevel(lu) === -1) {
    return;
  }

  userLogLevel = lu;
};

SetLogLevel(process.env.LOG_LEVEL || '');

function dateF(): string {
  const d = new Date();
  const str = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  return str;
}

function logprocess(type: TLogType, args: any[]) {
  const min = GetLogLevel(userLogLevel);
  const typesLogLevel = GetLogLevel(type);

  // env ignores it
  if (typesLogLevel < min) {
    return;
  }

  ////////
  const log = [`[${dateF()}]`, type, ...args.filter(notEmpty)];

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
        fn.substring(fn.indexOf('function') + 8, fn.indexOf('(')) ||
        'anonymous';

      callstack.push(fname);
      currentFunction = currentFunction.caller;
    }
  }

  return callstack.join('\n');
}

export const debug = (...args: any[]) => logprocess('DEBUG', args);

export const info = (...args: any[]) => logprocess('INFO', args);

export const warn = (...args: any[]) => logprocess('WARN', args);

//

export const trace = (...args: any[]) => {
  args.push(printStackTrace());
  logprocess('TRACE', args);
};

export const error = (...args: any[]) => {
  args.push(printStackTrace());
  logprocess('ERROR', args);
};

export const fatal = (...args: any[]) => {
  args.push(printStackTrace());
  logprocess('FATAL', args);
};
