export const extractAttributes = ({ idName }: { idName: string }) => {
  if (!document?.getElementById(idName)?.attributes) {
    return {};
  }

  const ret: Record<string, string> = {};
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [...document.getElementById(idName).attributes].forEach((a) => {
    ret[a.name] = a.value;
  });

  return ret;
};
