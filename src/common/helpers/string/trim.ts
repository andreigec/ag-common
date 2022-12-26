export function trimSide(str: string, fromStart = true, ...params: string[]) {
  const pstr = params.join('');
  if (!str) {
    return str;
  }

  const ret = str.replace(new RegExp(`[${pstr}]*$`, 'g'), '');

  if (fromStart) {
    return ret.replace(new RegExp(`^[${pstr}]*`, 'g'), '');
  }

  return ret;
}

export function trim(str: string, ...params: string[]) {
  if (!str) {
    return '';
  }

  str = trimSide(str, true, ...params);
  str = trimSide(str, false, ...params);
  return str;
}
