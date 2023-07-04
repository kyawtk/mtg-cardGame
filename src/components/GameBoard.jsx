import React, { useEffect, useState } from "react";
import "./GameBoard.scss";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { shuffleArray } from "../utils/data";
import cardsdata from "../utils/data";
import Tilt from "react-parallax-tilt";
const GameBoard = ({ score, handleScore }) => {
  const [level, setLevel] = useState(1);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Level 1");

  const [cardDeck, setCardDeck] = useState(cardsdata);

  useEffect(() => {
    const slice = 2 * level;
    setCardDeck(shuffleArray(cardsdata).slice(0, slice));

    message();
  }, [level]);

  const message = () => {
    setDisplayModal(true);
    setTimeout(() => {
      setDisplayModal(false);
    }, 2000);
  };

  function handleClick(id) {
    const clickedCard = cardDeck.find((card) => card.id == id);
    if (clickedCard.clicked) {
      console.log("game over");
      setModalMessage("Game Over");
      message();
      handleScore(0);

      setLevel(1);
    } else {
      handleScore(1);
      setCardDeck((current) => {
        return current.map((card) => {
          if (card.id === id) {
            return { ...card, clicked: true };
          }
          return card;
        });
      });
      console.log(score, cardDeck.length);
    }
    setCardDeck((current) => shuffleArray([...current]));
    if (score + 1 == cardDeck.length) {
      handleScore(0);
      setLevel((current) => current + 1);
      setModalMessage(`Level ${level + 1}`);
    }
  }
  return (
    <div className="gameBoard">
      {cardDeck.map((card) => {
        return <Card key={card.id} {...card} handleClick={handleClick}></Card>;
      })}
      <AnimatePresence>
        {" "}
        {displayModal && <Modal>{modalMessage}</Modal>}
      </AnimatePresence>
    </div>
  );
};

export default GameBoard;

function Card({ id, src, clicked, handleClick }) {
  return (
    <Tilt
      key={id}
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="5px"
    >
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="card"
        onClick={() => handleClick(id)}
      >
        <img src={src} />

        
      </motion.div>
    </Tilt>
  );
}
