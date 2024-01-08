import { makeObservable, observable, action } from "mobx";
import { getRandomBighead } from "./bigHeadDataRandomizer";

export class PlayersStore
{
    playersArr = [];
    id = 0;

    constructor()
    {
        makeObservable(this, {
            playersArr: observable,
            addPlayer: action,
            removePlayer: action,
            changeName: action,
            changeBigHead: action
        });
    }

    addPlayer()
    {
        let name = prompt("Enter name");
        if (name == "")
        {
            this.playersArr.push({ id: this.id++, name: "none", bighead: getRandomBighead(), points: 0, wins: 0, lettersArr:[]});

        }
        else
        {
            this.playersArr.push({ id: this.id++, name: name, bighead: getRandomBighead(), points: 0, wins: 0 , lettersArr:[]});
        }
    }

    removePlayer(removeID)
    {
        const index = this.playersArr.findIndex(player => player.id == removeID);

        if (index != -1)
        {
            this.playersArr.splice(index, 1);
        }
    }

    changeName(currID, newName)
    {
        const index = this.playersArr.findIndex(player => player.id == currID);

        if (index != -1)
        {
            if (newName == "")
            {
                this.playersArr[index].name = "none";
            }
            else
            {
                this.playersArr[index].name = newName;
            }
        }
    }

    changeBigHead(currID)
    {
        const index = this.playersArr.findIndex(player => player.id == currID);

        if (index != -1)
        {
            this.playersArr[index].bighead = getRandomBighead();
        }
    }
}
