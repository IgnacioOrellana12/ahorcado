import { React } from 'react'
import './App.css'
import Word from './components/Word/Word'
import { getWord } from './utils/word'

function App() {
  const word = getWord();

  return (
    <>
      <Word
        word={word}
      />
    </>
  )
}

export default App
