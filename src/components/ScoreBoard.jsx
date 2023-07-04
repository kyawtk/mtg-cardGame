import {useCallback, useEffect, useState} from "react";

const ScoreBoard = ({ score }) => {
  const [highest, setHighest] = useState(0);
useEffect(()=>{
  if(score > highest){
    setHighest(score)
  }
},[score])


  return (
    <div className="scoreBoard">
      <h2>Score: {score}</h2>
      <h2>Highest Score : {highest}</h2>
    </div>
  );
};

export default ScoreBoard;
