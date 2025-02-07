export function redactString(str: string) {
  let ret = str;

  ret = ret || '';
  const repl = '$1<redacted>$2';
  ret = ret.replace(/(\b)grant_type.+?(\b)/gm, repl);
  ret = ret.replace(/(\b)Bearer .+?(\b)/gm, repl);
  //jwt (base64 with .s)
  ret = ret.replace(/(eyJ[\w-_.]*\.[\w-_.]*\.[\w-_.]*)/gim, '<redacted>');
  return ret;
}

export function redactObject<T>(ob: T): T {
  if (typeof ob === 'string') {
    return redactString(ob) as T;
  } else if (typeof ob === 'object') {
    try {
      return JSON.parse(redactString(JSON.stringify(ob)));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return ob;
    }
  }
  return ob;
}
