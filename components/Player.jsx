import { BigHead } from "@bigheads/core";
import { observer } from "mobx-react-lite";

const Player = observer(({ bighead, name, playerID, wins, word, letters, removePlayer = () => { }, changeName = () => { }, changeBigHead = () => { }, addToGame, onPannel, points, gameStarted }) =>
{

    return (<>
        {onPannel == false &&
            <div style={{ border: '1px solid black' }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div onDoubleClick={() => changeBigHead(playerID)} style={{ width: "100px", height: "100px" }}>
                        <BigHead {...bighead} />
                    </div>
                    <h2 onDoubleClick={() => changeName(playerID)}> {name} </h2>


                    {gameStarted == false &&
                        <>
                            <input type="checkbox" onClick={() => addToGame(playerID)}></input>
                            <button onClick={() => removePlayer(playerID)}>Remove</button>
                        </>
                    }
                    <h4>WINS: {wins}</h4>


                </div>
            </div>}
        {onPannel == true &&
            <div style={{ border: '1px solid black' }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div onDoubleClick={() => changeBigHead(playerID)} style={{ width: "100px", height: "100px" }}>
                        <BigHead {...bighead} />
                    </div>
                    <h2 onDoubleClick={() => changeName(playerID)}> {name} </h2>
                    <h3>POINTS: {points}</h3>
                    <br/>
                    <div style={{display:"flex" }}>
                        
                            {letters.map((letter) => (<>
                                <h3 style={{ color: word.includes(letter) ? "green" : "red" }}>
                                    {letter}
                                </h3>
                                <h3>,</h3>
                            </>


                            ))}
                        
                    </div>
                </div>
            </div>
        }

    </>)
});

export default Player;