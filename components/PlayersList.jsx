import { observer } from "mobx-react-lite";
import Player from "./Player";


const PlayersList = observer(({ players, game }) =>
{

    function removePlayer(playerID)
    {
        players.removePlayer(playerID)
    }

    function changeName(playerID)
    {
        let newName = prompt("Enter new name");
        players.changeName(playerID, newName);
    }

    function changeBigHead(playerID)
    {
        players.changeBigHead(playerID);
    }

    function addToGame(playerID)
    {
        let index = players.playersArr.findIndex(player => player.id == playerID);
        game.addToGame(players.playersArr[index]);
    }

    return (<>
        {players.playersArr.map(p => <Player name={p.name} bighead={p.bighead} playerID={p.id} removePlayer={removePlayer} changeName={changeName} changeBigHead={changeBigHead} addToGame={addToGame} onPannel={false} gameStarted={game.isRunning} wins={p.wins} />)}
    </>);
});

export default PlayersList;
