export const replaceStringSpace = (str: string, replaceBy: string): string => {
  return str.replace(/\s/g, replaceBy).toLowerCase();
};
