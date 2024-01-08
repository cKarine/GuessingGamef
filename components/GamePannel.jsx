import { observer } from "mobx-react-lite";
import Player from "./Player";
import { useEffect, useRef } from "react";
import TurnTimer from "./TurnTimer";



const GamePannel = observer(({ game, players }) =>
{
    let guessInterval = useRef(null);

    function finishGame()
    {
        addWin();
        game.players.forEach((player) =>
        {
            player.points = 0;
            player.lettersArr.clear();
        })
        game.isRunning = false;
        game.word = "";
        game.letters.clear();
        game.players.clear();
    }

    function addWin()
    {
        let maxPoints = -1;
        let winner = null;
        let isTie = false;


        game.players.forEach((player) =>
        {
            if (player.points > maxPoints)
            {
                maxPoints = player.points;
                winner = player.id;
                isTie = false;
            }
            else if (player.points == maxPoints)
            {
                isTie = true;
            }

            
        })

        if (isTie)
            {
                alert("TIE!");
            }
            else if (winner != null)
            {
                const index = players.playersArr.findIndex(player => player.id == winner);

                alert(players.playersArr[index].name+" WON!");
                players.playersArr[index].wins++;
            
            }
    }

    function guessLetter(playerID)
    {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        let wordLetters = game.word.split("");
        console.log(game.letters.length)
        while (game.letters.includes(alphabet[randomIndex]))
        {
            if (wordLetters.every((l) => game.letters.includes(l)))
            {
                clearInterval(guessInterval.current);
                finishGame();
                return;
            }

            randomIndex = Math.floor(Math.random() * alphabet.length);

        }

        game.letters.push(alphabet[randomIndex]);
        game.players[playerID].lettersArr.push(alphabet[randomIndex]);

        if (game.word.includes(alphabet[randomIndex]))
        {
            game.players[playerID].points++;
        }

    }

    return (<>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {game.players.map(p => <Player name={p.name} bighead={p.bighead} playerID={p.id} onPannel={true} points={p.points} word={game.word} letters={p.lettersArr}/>)}
            </div>
            <button onClick={() => { game.startGame() }} disabled={!(game.players.length >= 2 && game.players.length <= 5 && game.isRunning == false)}>START GAME</button>

        </div>
        {console.log("hello" + game.word)}

        <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ textSizeAdjust: "50px", alignItems: "center" }}>{game.word.split("").map((letter) => game.letters.includes(letter) ? letter : "*")}</h1>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
            <TurnTimer game={game} guessLetter={guessLetter}> </TurnTimer>
        </div>

    </>)

})


export default GamePannel;