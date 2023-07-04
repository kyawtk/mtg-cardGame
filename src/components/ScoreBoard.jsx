import {useCallback, useEffect, useState} from "react";

const ScoreBoard = ({ score }) => {
 


  return (
    <div className="scoreBoard" style={{padding:'1rem'}}>
      <h2>Score: {score}</h2>
        
    </div>
  );
};

export default ScoreBoard;
