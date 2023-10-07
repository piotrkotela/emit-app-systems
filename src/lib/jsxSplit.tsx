/** Splits text and maps " " to <>&nbsp;</> */
export const jsxSplit = (text: string): (string | JSX.Element)[] => {
  return text
    .split("")
    .map((letter) => (letter === " " ? <>&nbsp;</> : letter));
};
