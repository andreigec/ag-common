export function redactString(str: string) {
  let ret = str;

  ret = ret ?? '';
  const repl = '$1<redact>$2';
  ret = ret.replace(/(\b)grant_type.+?(\b)/gm, repl);
  ret = ret.replace(/(\b)Bearer .+?(\b)/gm, repl);
  ret = ret.replace(/(\b)eyJ[a-zA-Z0-9]{10}.+?(\b)/gm, repl);
  return ret;
}

export function redactObject<T>(ob: T): T {
  if (typeof ob === 'string') {
    return redactString(ob) as T;
  } else if (typeof ob === 'object') {
    try {
      return JSON.parse(redactString(JSON.stringify(ob)));
    } catch (e) {
      return ob;
    }
  }
  return ob;
}
