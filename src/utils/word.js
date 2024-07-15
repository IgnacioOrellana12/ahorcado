import { countries } from "../contants/contriesNames";

export const getWord = () => {
  return countries[(Math.floor(Math.random() * 5) + 1) - 1].split("")
};

export const findLetter = (word, letter) => {
  const splitWord = word.toUpperCase().split("");
  const upperLetter = letter.toUpperCase();
  const foundLetters = [];

  splitWord.forEach((w, index) => {
    if (w === upperLetter) {
      foundLetters.push({
        letter: w,
        index: index
      })
    };
  });
  return foundLetters;
};

export const replaceLetter = (arrLetter, underScoreArr, letter) => {
  if (!arrLetter.includes(letter)) return letter;

  const foundLetters = [];

  arrLetter.forEach((w, index) => {
    let upperLetter = w.toUpperCase();

    if (upperLetter === letter) {
      foundLetters.push({
        letter: w,
        index: index
      });
    };
  });

  foundLetters.forEach((lettersObj) => {
    underScoreArr[lettersObj.index] = lettersObj.letter
  });

  return underScoreArr;
};