import { useState, useContext } from "react";
import Header from "./components/Header";
import "./App.scss";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [openModal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  function handleScore(n) {
    if (n == 0) {
      setScore(0);
    } else {
      setScore((current) => current + 1);
    }
  }
  function closeModal() {
    setModal(false);
  }
  return (
    <>
      <Header setModal={setModal}></Header>
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{
              opacity:0,
              scale:0.9
            }}
            animate={{
              scale:1
              ,opacity:1
            }}
            exit={{
              opacity: 0
            }}
          className="instructions">
            <h1 style={{textAlign: 'center'}}>Click every Card... But once Per item.....</h1>
            <button onClick={closeModal}>Ok</button>
          </motion.div>
        )}
      </AnimatePresence>
      <ScoreBoard score={score}></ScoreBoard>
      <GameBoard score={score} handleScore={handleScore}></GameBoard>
    </>
  );
}

export default App;
