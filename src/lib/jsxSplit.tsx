/** Splits text and maps " " to <>&nbsp;</> */
export const jsxLetterSplit = (text: string): (string | JSX.Element)[] => {
  return text
    .split("")
    .map((letter) => (letter === " " ? <>&nbsp;</> : letter));
};

export const jsxWordSplit = (text: string): (string | JSX.Element)[] => {
  const words: (string | JSX.Element)[] = text.split(" ");

  for (let i = 0; i < words.length - 1; i++) {
    words[i] = <>{words[i]}&nbsp;</>;
  }

  return words;
};
