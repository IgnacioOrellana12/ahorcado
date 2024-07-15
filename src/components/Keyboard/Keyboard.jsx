import React, { useEffect, useState } from "react";
import { getKeyboard } from "../../utils/keyBoard";
import "./keyboard.css";

const Keyboard = ({ setLetter }) => {
  const keyBoard = getKeyboard();
  const [inputLetter, setInputLetter] = useState("");

  const handleInputLetter = (e) => {
    const { value } = e.target;
    setInputLetter(value);
  };

  useEffect(() => {
    // console.log("Tuki: Cambió el evento", inputLetter)
    setLetter(inputLetter);
    setInputLetter("");

  }, [inputLetter]);


  return (
    <section className="keyboard">
      {
        keyBoard?.map((letter, index) => {
          return (
            <button
              key={index}
              name={letter}
              value={letter}
              onClick={handleInputLetter}
            >
              {letter}
            </button>
          );
        })
      }
    </section>
  );
};
export default Keyboard;