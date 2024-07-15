
export const countries = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia"
];
// console.log(countries[(Math.floor(Math.random() * 5) + 1) - 1])

const findLetter = (word, letter) => {
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
  return foundLetters
};

// console.log(findLetter("Argentina", "a"))


const replaceLetter = (word, underScoreArr, letter) => {
  if(!word.includes(letter)) return letter;

  const foundLetters = [];

  word.forEach((w, index) => {
    let upperLetter = w.toUpperCase();

    if (upperLetter === letter) {
      foundLetters.push({
        letter: w,
        index: index
      })
    };
  });

  foundLetters.forEach((lettersObj, index) => {
    underScoreArr[lettersObj.index] = lettersObj.letter
  });

  return underScoreArr;
};

console.log(replaceLetter(
  ["A", "r", "g", "e", "n", "t", "i", "n", "a"], 
  ["___", "___", "___", "___", "___",  "___",  "___",  "___", "___"], 
  "s")
)


