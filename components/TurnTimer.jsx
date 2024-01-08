import { observer } from "mobx-react-lite";
import { useEffect } from "react";



const TurnTimer = observer(({ game, guessLetter }) => {
 
    
    useEffect(() => {
    if (game.isRunning == true) {
      const intervalID = setInterval(() => {
        let randomPlayerID = Math.floor(Math.random() * game.players.length);
        guessLetter(randomPlayerID);
      }, game.turnInterval);

      return () => clearInterval(intervalID);
    }
  }, [game.isRunning, game.turnInterval]);

  return (<>
    <label>time {game.turnInterval}ms </label>
    <input type="range" min={10} max={5000} value={game.turnInterval} onChange={(e) => game.setInterval(e.target.valueAsNumber)}></input>
  
  </>);
});


export default TurnTimer;
