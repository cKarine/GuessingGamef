import { useState } from "react";
import PlayersList from "../components/PlayersList";
import { getRandomBighead } from "../components/bigHeadDataRandomizer";
import {PlayersStore} from "../components/PlayersStore"
import { Game } from "../components/Game";
import GamePannel from "../components/GamePannel";

export default function App()
{

  const players = new PlayersStore();
  const game = new Game();

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>

        <div style={{ flex: '1', padding: '10px', border: '1px solid black' }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>Players</h1>
            <button onClick={() => players.addPlayer()} style={{ width: "100px", height: "40px" }}>Add</button>
          </div>
          <PlayersList players={players} game = {game} />

        </div>
        <div style={{ flex: '3', padding: '10px', border: '1px solid black' }}>
          <center>
          <h1>Game</h1>
          </center>
          <GamePannel players={players} game={game}/>
        </div>
      </div>
    </>
  );
}