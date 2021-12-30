/* eslint-disable @typescript-eslint/no-explicit-any */
import { notEmpty } from '.';

export type TLogType = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';
export const GetLogLevel = (l: TLogType) =>
  ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'].findIndex(
    (s) => s === l,
  );

/* eslint-disable no-console */
function dateF(): string {
  const d = new Date();
  const str = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  return str;
}

function nicify(...args: any[][]) {
  const ret: string[] = [];
  args.forEach((a) => {
    a.forEach((v) => {
      if (
        v !== null &&
        typeof v !== 'undefined' &&
        v.toString().indexOf('Error:') !== -1 &&
        v.stack
      ) {
        ret.push(`${v.stack}`);
      } else if (typeof v === 'string') {
        if (v.trim() !== 'undefined') {
          ret.push(`${v.trim()}`);
        }
      } else if (typeof v === 'object') {
        ret.push(JSON.parse(JSON.stringify(v)));
      } else {
        ret.push(v);
      }
    });
  });

  return ret;
}

function logprocess(type: TLogType, date: string, args: string[]) {
  const ds = date ? `[${date}]` : '';
  const retm = [ds, type, ...args].filter(notEmpty).join('\t');
  const min =
    GetLogLevel(process.env.LOG_LEVEL?.toUpperCase() as TLogType) || 'WARN';

  const typesLogLevel = GetLogLevel(type);

  // env ignores it
  if (typesLogLevel < min) {
    return;
  }

  switch (type) {
    case 'TRACE': {
      console.trace(retm);
      break;
    }

    case 'DEBUG': {
      console.debug(retm);
      break;
    }

    case 'INFO': {
      console.log(retm);
      break;
    }

    case 'WARN': {
      console.warn(retm);
      break;
    }

    case 'ERROR': {
      console.error(retm);
      break;
    }

    case 'FATAL': {
      console.error(retm);
      break;
    }

    default: {
      console.log(retm);
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

export const trace = (...args: any[]) => {
  const argsNice = nicify(args);
  args.push(printStackTrace());
  logprocess('TRACE', dateF(), argsNice);
};

export const debug = (...args: any[]) =>
  logprocess('DEBUG', dateF(), nicify(args));

export const info = (...args: any[]) =>
  logprocess('INFO', dateF(), nicify(args));

export const warn = (...args: any[]) =>
  logprocess('WARN', dateF(), nicify(args));

export const error = (...args: any[]) =>
  logprocess('ERROR', dateF(), nicify(args));

export const fatal = (...args: any[]) => {
  const argsNice = nicify(args);
  args.push(printStackTrace());
  logprocess('FATAL', dateF(), argsNice);
};
