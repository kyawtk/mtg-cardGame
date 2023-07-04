import React, { useEffect, useState } from "react";
import "./GameBoard.scss";
import { shuffleArray } from "../utils/data";
import cardsdata from "../utils/data";
import Tilt from 'react-parallax-tilt'
const GameBoard = ({ score, handleScore }) => {
  const [cards, setCards] = useState(cardsdata.slice(0, 5));

  function handleClick(id) {
    const clickedCard = cards.find((card) => card.id == id);
    if (clickedCard.clicked) {
      console.log("game over");
      handleScore(0);
      setCards((current) => {
        return current.map((card) => {
          return { ...card, clicked: false };
        });
      });
    } else {
      handleScore(1);
      setCards((current) => {
        return current.map((card) => {
          if (card.id === id) {
            return { ...card, clicked: true };
          }
          return card;
        });
      });
    }
    setCards((current) => shuffleArray([...current]));
  }
  return (
    <div className="gameBoard">
      {cards.map((card) => {
        return <Card key={card.id} {...card} handleClick={handleClick}></Card>;
      })}
    </div>
  );
};

export default GameBoard;

function Card({ id, src, clicked, handleClick }) {
  return (
    <Tilt key={id} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="5px">
    <div className="card" onClick={() => handleClick(id)}>
      <img src={src} />
    </div>
    </Tilt>
  );
}
