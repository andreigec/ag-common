export type TOnMessage = (
  m: string,
  options?: { appearance: 'error' | 'success' },
) => void;
