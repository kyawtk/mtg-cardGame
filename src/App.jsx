import { useState ,useContext } from 'react'
import Header from './components/Header'
import './App.scss'
import ScoreBoard from './components/ScoreBoard'
import GameBoard from './components/GameBoard'



function App() {
 
  const [score, setScore ] = useState(0)
  function handleScore (n){
    if(n==0){
      setScore(0)
    }else{
       setScore(current => current+1)
    }
   
  }
  return(
    <>
    <Header></Header>
    <ScoreBoard score={score}></ScoreBoard>
    <GameBoard score={score} handleScore={handleScore} ></GameBoard>
    </>
  )
}

export default App
