import React, { useEffect, useState } from "react";
import "./word.css";
import Keyboard from "../Keyboard/Keyboard";
import { replaceLetter } from "../../utils/word";

const Word = ({ word }) => {
  const [letter, setLetter] = useState("");
  const [underScoreAmount, setUnderScoreAmount] = useState(new Array(word.length).fill("___", 0, word.length));
  const [error, setError] = useState([]);


  useEffect(() => {
    // console.log(word, letter)
    if (letter) {
      let foundLetter = replaceLetter(word, underScoreAmount, letter);
      if (foundLetter.length > 1) {
        setUnderScoreAmount(foundLetter);
      } else {
        setError([...new Set([...error, foundLetter])])
      };
    };
  }, [letter])

  return (
    <section>
      <section className="word">
        {
          underScoreAmount?.map((u, index) => {
            return (
              <div>
                <p key={index}>{u}</p>
              </div>
            )
          })
        }
      </section>
      <section className="error">
        {
          error?.map((letter, index) => {
            return (
              <p key={index}>{letter}</p>
            )
          })
        }
      </section>
      <Keyboard
        setLetter={setLetter}
      />
    </section>
  )
}

export default Word;
